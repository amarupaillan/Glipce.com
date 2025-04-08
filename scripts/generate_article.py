#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para generar artículos de blog usando IA

Este script toma contenido viral de Reddit u otras fuentes y genera
artículos completos para blog usando OpenAI, optimizados para SEO.
"""

import argparse
import json
import os
import sys
import time
import uuid
from datetime import datetime
import openai
import re

def parse_arguments():
    """Procesar argumentos de línea de comandos"""
    parser = argparse.ArgumentParser(description='Generar artículos de blog con IA')
    
    parser.add_argument('--input', type=str, required=True,
                        help='Ruta al archivo JSON con contenido viral')
    
    parser.add_argument('--output', type=str, required=True,
                        help='Directorio donde guardar los artículos generados')
    
    parser.add_argument('--lang', type=str, default='es',
                        choices=['es', 'en'],
                        help='Idioma para generar los artículos (default: es)')
    
    parser.add_argument('--model', type=str, default='gpt-4',
                        help='Modelo de OpenAI a utilizar (default: gpt-4)')
    
    parser.add_argument('--max_articles', type=int, default=3,
                        help='Número máximo de artículos a generar (default: 3)')
    
    parser.add_argument('--keywords', type=str, default='',
                        help='Palabras clave separadas por comas para incluir en los artículos')
    
    return parser.parse_args()

def get_openai_client():
    """Configurar cliente de OpenAI"""
    try:
        # Intentar cargar API key desde variable de entorno
        api_key = os.environ.get('OPENAI_API_KEY')
        
        # Si no está en variable de entorno, buscar en config.json
        if not api_key:
            try:
                config_path = os.path.join(os.path.dirname(__file__), 'config', 'openai_config.json')
                with open(config_path, 'r') as f:
                    config = json.load(f)
                    api_key = config.get('api_key')
            except (FileNotFoundError, json.JSONDecodeError) as e:
                print(f"Error al cargar configuración de OpenAI: {e}")
        
        if not api_key:
            print("ERROR: API key de OpenAI no encontrada.")
            print("Configure la variable de entorno OPENAI_API_KEY,")
            print("o cree un archivo config/openai_config.json con su API key.")
            sys.exit(1)
            
        client = openai.OpenAI(api_key=api_key)
        return client
    
    except Exception as e:
        print(f"Error al configurar cliente de OpenAI: {e}")
        sys.exit(1)

def create_prompt_for_article(post, keywords, lang):
    """Crear prompt para generar un artículo basado en un post viral"""
    keywords_text = ""
    if keywords:
        keywords_text = f"\nIncluye las siguientes palabras clave de manera natural: {keywords}\n"
    
    language = "español" if lang == "es" else "English"
    title = post.get('title', '')
    url = post.get('url', '')
    permalink = post.get('permalink', '')
    num_comments = post.get('num_comments', 0)
    score = post.get('score', 0)
    subreddit = post.get('subreddit', '')
    
    # Obtener comentarios relevantes
    comments_text = ""
    if post.get('comments'):
        comments_text = "\nAlgunos comentarios relevantes del debate:\n"
        for i, comment in enumerate(post.get('comments', [])[:3], 1):
            comments_text += f"{i}. {comment.get('body', '')}\n"
    
    prompt = f"""Eres un experto en redacción de contenido para blogs especializados en tecnología, inteligencia artificial y automatización de procesos empresariales. 

Tu tarea es crear un artículo informativo y atractivo en {language} para un blog corporativo especializado, basado en esta tendencia viral:

TÍTULO ORIGINAL: {title}
URL: {url}
FUENTE: Reddit r/{subreddit}
POPULARIDAD: {score} votos, {num_comments} comentarios
{comments_text}

INSTRUCCIONES ESPECÍFICAS:

1. Crea un título SEO optimizado atractivo que se relacione con el tema pero enfocado en empresas y automatización.
2. Escribe una introducción que capture la atención y explique por qué este tema es relevante para empresas.
3. Estructura el artículo con 4-6 secciones con subtítulos claros.
4. En cada sección, desarrolla aspectos relevantes del tema, relacionándolos con:
   - Automatización empresarial
   - Eficiencia operativa
   - Transformación digital
   - Inteligencia artificial aplicada
5. Incluye al menos 2 casos de uso o ejemplos prácticos.
6. Añade datos estadísticos relevantes cuando sea posible (puedes utilizarlos de manera creativa).
7. Concluye con recomendaciones prácticas.
8. Añade una llamada a la acción final.
{keywords_text}
9. FORMATO: Devuelve el artículo en formato JSON con la siguiente estructura:
{{
  "title": "Título del artículo",
  "meta_description": "Descripción meta para SEO (150-160 caracteres)",
  "slug": "slug-del-articulo",
  "sections": [
    {{
      "type": "introduction",
      "content": "Texto de introducción"
    }},
    {{
      "type": "section",
      "heading": "Primer subtítulo",
      "content": "Contenido de la primera sección"
    }},
    ...
    {{
      "type": "conclusion",
      "content": "Texto de conclusión"
    }},
    {{
      "type": "cta",
      "content": "Llamada a la acción"
    }}
  ],
  "keywords": ["palabra clave 1", "palabra clave 2", ...],
  "reading_time": tiempo estimado de lectura en minutos
}}

Importante: El artículo debe tener un tono profesional pero accesible, debe ser informativo y práctico, y debe estar orientado a empresas interesadas en automatización y transformación digital.
"""
    return prompt

def generate_article(client, prompt, model):
    """Generar artículo usando OpenAI"""
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "Eres un experto en redacción de contenido para blogs corporativos especializados en tecnología, IA y automatización."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=4000,
            top_p=1,
            frequency_penalty=0.2,
            presence_penalty=0.1
        )
        
        content = response.choices[0].message.content
        
        # Extraer el JSON del contenido
        try:
            # Buscar estructura JSON en la respuesta
            json_match = re.search(r'({[\s\S]*})', content)
            if json_match:
                json_str = json_match.group(1)
                return json.loads(json_str)
            else:
                print("No se pudo encontrar JSON en la respuesta. Contenido recibido:")
                print(content[:500] + "..." if len(content) > 500 else content)
                return None
        except json.JSONDecodeError as e:
            print(f"Error al decodificar JSON: {e}")
            print("Contenido recibido:")
            print(content[:500] + "..." if len(content) > 500 else content)
            return None
            
    except Exception as e:
        print(f"Error al generar artículo: {e}")
        return None

def save_article(article, output_dir, source_post=None):
    """Guardar artículo generado en un archivo JSON"""
    try:
        os.makedirs(output_dir, exist_ok=True)
        
        # Generar ID único y timestamp
        article_id = str(uuid.uuid4())
        timestamp = datetime.now().isoformat()
        
        # Preparar datos para guardar
        article_data = article.copy()
        article_data["id"] = article_id
        article_data["created_at"] = timestamp
        article_data["lang"] = "es"  # Por defecto español, pero podría venir como parámetro
        article_data["status"] = "draft"
        
        # Incluir datos de la fuente si están disponibles
        if source_post:
            article_data["source"] = {
                "type": "reddit",
                "title": source_post.get("title"),
                "url": source_post.get("permalink"),
                "score": source_post.get("score"),
                "subreddit": source_post.get("subreddit")
            }
        
        # Guardar archivo
        slug = article.get("slug", f"articulo-{article_id[:8]}")
        filename = f"{slug}.json"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(article_data, f, ensure_ascii=False, indent=2)
            
        return filepath
    
    except Exception as e:
        print(f"Error al guardar artículo: {e}")
        return None

def main():
    """Función principal"""
    args = parse_arguments()
    
    # Comprobar que existe el directorio de salida
    os.makedirs(args.output, exist_ok=True)
    
    # Comprobar que existe el archivo de entrada
    if not os.path.isfile(args.input):
        print(f"ERROR: El archivo de entrada {args.input} no existe.")
        sys.exit(1)
    
    # Cargar datos de entrada
    try:
        with open(args.input, 'r', encoding='utf-8') as f:
            input_data = json.load(f)
    except Exception as e:
        print(f"Error al cargar datos de entrada: {e}")
        sys.exit(1)
    
    # Obtener posts virales
    posts = input_data.get('posts', [])
    if not posts:
        print("No se encontraron posts en el archivo de entrada.")
        sys.exit(1)
    
    print(f"Se encontraron {len(posts)} posts virales.")
    
    # Configurar cliente de OpenAI
    openai_client = get_openai_client()
    
    # Limitar número de artículos a generar
    num_articles = min(len(posts), args.max_articles)
    
    # Generar artículos
    generated_articles = []
    for i, post in enumerate(posts[:num_articles], 1):
        print(f"\nGenerando artículo {i}/{num_articles}...")
        print(f"Título original: {post.get('title')}")
        
        # Crear prompt
        prompt = create_prompt_for_article(post, args.keywords, args.lang)
        
        # Generar artículo
        print("Enviando solicitud a OpenAI...")
        article = generate_article(openai_client, prompt, args.model)
        
        if article:
            print(f"Artículo generado: {article.get('title')}")
            
            # Guardar artículo
            filepath = save_article(article, args.output, post)
            if filepath:
                print(f"Artículo guardado en: {filepath}")
                generated_articles.append(filepath)
        
        # Pausa para evitar límites de rate
        if i < num_articles:
            print("Esperando para la siguiente solicitud...")
            time.sleep(5)
    
    print(f"\nProceso completado. Se generaron {len(generated_articles)} artículos.")

if __name__ == "__main__":
    main() 