# Makefile para automatización de contenido de blog
# Este archivo define tareas para generar y publicar contenido automáticamente
# usando scraping de Reddit, generación con IA y publicación mediante API

# Configuración
PYTHON = python3
PIP = pip3
NODE = node
NPM = npm
CONTENT_DIR = ./content

# Dependencias
.PHONY: install
install:
	@echo "Instalando dependencias necesarias..."
	$(PIP) install requests praw openai beautifulsoup4 markdown
	$(NPM) install axios dotenv

# Crear estructura de directorios
.PHONY: init
init:
	@echo "Creando estructura de directorios..."
	mkdir -p $(CONTENT_DIR)/scraped
	mkdir -p $(CONTENT_DIR)/generated
	mkdir -p $(CONTENT_DIR)/published
	@echo "Estructura creada exitosamente."

# Obtener contenido viral de Reddit
.PHONY: scrape-reddit
scrape-reddit:
	@echo "Obteniendo contenido viral de Reddit..."
	$(PYTHON) scripts/scrape_reddit.py --subreddits technology,business,datascience,artificial,machinelearning --min_score 1000 --time_filter week --limit 10 --output $(CONTENT_DIR)/scraped/reddit_trending.json

# Generar artículos del blog usando IA
.PHONY: generate-articles
generate-articles:
	@echo "Generando artículos con IA..."
	$(PYTHON) scripts/generate_article.py --input $(CONTENT_DIR)/scraped/reddit_trending.json --output $(CONTENT_DIR)/generated --lang es --keywords "automatización,inteligencia artificial,eficiencia empresarial,transformación digital"

# Revisar artículos generados
.PHONY: review-articles
review-articles:
	@echo "Revisando artículos generados para asegurar calidad..."
	$(PYTHON) scripts/review_content.py --input $(CONTENT_DIR)/generated --output $(CONTENT_DIR)/generated --min_score 0.7

# Publicar artículos en WordPress (adaptable a otras plataformas)
.PHONY: publish-articles
publish-articles:
	@echo "Publicando artículos en WordPress..."
	$(NODE) scripts/publish_to_wordpress.js --input $(CONTENT_DIR)/generated --output $(CONTENT_DIR)/published

# Traducir artículos a inglés
.PHONY: translate-articles
translate-articles:
	@echo "Traduciendo artículos a inglés..."
	$(PYTHON) scripts/translate_articles.py --input $(CONTENT_DIR)/generated --output $(CONTENT_DIR)/generated --source_lang es --target_lang en

# Distribuir a redes sociales
.PHONY: distribute-social
distribute-social:
	@echo "Distribuyendo artículos en redes sociales..."
	$(NODE) scripts/distribute_social.js --input $(CONTENT_DIR)/published --platforms twitter,linkedin,facebook

# Flujo completo de trabajo
.PHONY: run-full-workflow
run-full-workflow: scrape-reddit generate-articles review-articles translate-articles publish-articles distribute-social
	@echo "Flujo de trabajo completo ejecutado."

# Tarea programada diaria
.PHONY: daily-content
daily-content:
	@echo "Ejecutando generación diaria de contenido..."
	$(MAKE) run-full-workflow

# Ayuda
.PHONY: help
help:
	@echo "Comandos disponibles:"
	@echo "  make install             - Instalar dependencias"
	@echo "  make init                - Crear estructura de directorios"
	@echo "  make scrape-reddit       - Obtener contenido viral de Reddit"
	@echo "  make generate-articles   - Generar artículos con IA"
	@echo "  make review-articles     - Revisar calidad de artículos"
	@echo "  make translate-articles  - Traducir artículos a inglés"
	@echo "  make publish-articles    - Publicar artículos en WordPress"
	@echo "  make distribute-social   - Distribuir en redes sociales"
	@echo "  make run-full-workflow   - Ejecutar todo el proceso"
	@echo "  make daily-content       - Ejecutar generación diaria"
	@echo ""
	@echo "Para obtener información detallada, ejecute: make help-full"

# Ayuda detallada
.PHONY: help-full
help-full:
	@echo "===== Sistema de Automatización de Contenido ====="
	@echo ""
	@echo "Este Makefile automatiza el proceso de generación y publicación"
	@echo "de contenido para el blog, utilizando fuentes como Reddit,"
	@echo "generación con IA y publicación automática."
	@echo ""
	@echo "Proceso completo:"
	@echo "1. Obtiene contenido viral de subreddits específicos"
	@echo "2. Genera artículos completos usando IA (OpenAI)"
	@echo "3. Revisa la calidad del contenido"
	@echo "4. Traduce el contenido a inglés si es necesario"
	@echo "5. Publica en WordPress vía API REST"
	@echo "6. Distribuye en redes sociales automáticamente"
	@echo ""
	@echo "Para configuración, edite los archivos en ./scripts/config/"
	@echo "Para credenciales, cree un archivo .env en el directorio raíz" 