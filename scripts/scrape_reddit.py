#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para obtener contenido viral de Reddit

Este script obtiene posts virales de los subreddits especificados,
los filtra según puntuación y guarda los resultados en un archivo JSON.
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime
import praw
import requests

def parse_arguments():
    """Procesar argumentos de línea de comandos"""
    parser = argparse.ArgumentParser(description='Obtener contenido viral de Reddit')
    
    parser.add_argument('--subreddits', type=str, required=True,
                        help='Lista separada por comas de subreddits a consultar')
    
    parser.add_argument('--min_score', type=int, default=1000,
                        help='Puntuación mínima para considerar un post (default: 1000)')
    
    parser.add_argument('--time_filter', type=str, default='week',
                        choices=['day', 'week', 'month', 'year', 'all'],
                        help='Filtro de tiempo para posts (default: week)')
    
    parser.add_argument('--limit', type=int, default=10,
                        help='Número máximo de posts por subreddit (default: 10)')
    
    parser.add_argument('--output', type=str, required=True,
                        help='Ruta del archivo JSON de salida')
    
    return parser.parse_args()

def get_reddit_client():
    """Obtener cliente autenticado de Reddit"""
    try:
        # Intentar cargar credenciales desde variables de entorno
        client_id = os.environ.get('REDDIT_CLIENT_ID')
        client_secret = os.environ.get('REDDIT_CLIENT_SECRET')
        user_agent = os.environ.get('REDDIT_USER_AGENT', 'content_scraper_for_blog:v1.0 (by /u/your_username)')
        
        # Si no están en variables de entorno, buscar en config.json
        if not client_id or not client_secret:
            try:
                config_path = os.path.join(os.path.dirname(__file__), 'config', 'reddit_config.json')
                with open(config_path, 'r') as f:
                    config = json.load(f)
                    client_id = config.get('client_id')
                    client_secret = config.get('client_secret')
                    user_agent = config.get('user_agent', user_agent)
            except (FileNotFoundError, json.JSONDecodeError) as e:
                print(f"Error al cargar configuración: {e}")
        
        if not client_id or not client_secret:
            print("ERROR: Credenciales de Reddit no encontradas.")
            print("Configure las variables de entorno REDDIT_CLIENT_ID y REDDIT_CLIENT_SECRET,")
            print("o cree un archivo config/reddit_config.json con las credenciales.")
            sys.exit(1)
            
        return praw.Reddit(
            client_id=client_id,
            client_secret=client_secret,
            user_agent=user_agent
        )
    except Exception as e:
        print(f"Error al configurar cliente de Reddit: {e}")
        sys.exit(1)

def get_trending_posts(reddit, subreddit_name, min_score, time_filter, limit):
    """Obtener posts populares de un subreddit específico"""
    try:
        subreddit = reddit.subreddit(subreddit_name)
        
        # Obtener posts con mayor puntuación en el período especificado
        top_posts = subreddit.top(time_filter=time_filter, limit=limit * 2)  # Obtenemos el doble para filtrar
        
        trending_posts = []
        for post in top_posts:
            if post.score >= min_score and not post.stickied and not post.is_self:
                # Obtener los primeros comentarios si están disponibles
                post.comments.replace_more(limit=0)
                comments = []
                for comment in list(post.comments)[:5]:  # Solo los 5 primeros comentarios
                    if comment.score > 20:  # Solo comentarios con cierta relevancia
                        comments.append({
                            'body': comment.body,
                            'score': comment.score,
                            'author': str(comment.author) if comment.author else '[deleted]'
                        })
                
                post_data = {
                    'id': post.id,
                    'title': post.title,
                    'url': post.url,
                    'permalink': f"https://www.reddit.com{post.permalink}",
                    'score': post.score,
                    'num_comments': post.num_comments,
                    'created_utc': post.created_utc,
                    'author': str(post.author) if post.author else '[deleted]',
                    'is_video': post.is_video,
                    'subreddit': subreddit_name,
                    'comments': comments,
                    'thumbnail': post.thumbnail if hasattr(post, 'thumbnail') and post.thumbnail.startswith('http') else None
                }
                
                # Si es una imagen, intentamos obtenerla
                if post.url.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                    post_data['image_url'] = post.url
                
                # Intentar obtener texto si es un post de texto
                if post.is_self and hasattr(post, 'selftext'):
                    post_data['selftext'] = post.selftext
                
                trending_posts.append(post_data)
                
                # Si ya tenemos suficientes posts, terminamos
                if len(trending_posts) >= limit:
                    break
        
        return trending_posts
    
    except Exception as e:
        print(f"Error al obtener posts de r/{subreddit_name}: {e}")
        return []

def main():
    """Función principal"""
    args = parse_arguments()
    
    # Crear directorio de salida si no existe
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    
    # Obtener cliente de Reddit
    reddit = get_reddit_client()
    
    # Lista para almacenar todos los posts
    all_trending_posts = []
    
    # Procesar cada subreddit
    subreddits = args.subreddits.split(',')
    for subreddit in subreddits:
        print(f"Obteniendo posts virales de r/{subreddit}...")
        trending_posts = get_trending_posts(
            reddit=reddit,
            subreddit_name=subreddit.strip(),
            min_score=args.min_score,
            time_filter=args.time_filter,
            limit=args.limit
        )
        
        print(f"  - Se encontraron {len(trending_posts)} posts que cumplen los criterios.")
        all_trending_posts.extend(trending_posts)
        
        # Pequeña pausa para evitar límites de rate
        time.sleep(1)
    
    # Ordenar por puntuación descendente
    all_trending_posts.sort(key=lambda x: x['score'], reverse=True)
    
    # Añadir metadatos
    output_data = {
        'metadata': {
            'date': datetime.now().isoformat(),
            'subreddits': subreddits,
            'min_score': args.min_score,
            'time_filter': args.time_filter,
            'total_posts': len(all_trending_posts)
        },
        'posts': all_trending_posts
    }
    
    # Guardar resultados
    with open(args.output, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    
    print(f"\nSe guardaron {len(all_trending_posts)} posts virales en {args.output}")

if __name__ == "__main__":
    main() 