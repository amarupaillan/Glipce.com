import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { blogArticles, Article, ArticleContent } from "./articleData";

// SEO optimized blog article component
const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Find the article that matches the slug
    const foundArticle = blogArticles.find((a: Article) => a.slug === slug);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Find related articles based on category
      const related = blogArticles
        .filter((a: Article) => a.slug !== slug && a.category === foundArticle.category)
        .slice(0, 3);
      setRelatedArticles(related);
      
      // Set page title and meta description for SEO
      document.title = `${foundArticle.title} | Glipce - Automatización e IA`;
      
      // Create meta description tag if it doesn't exist
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', foundArticle.excerpt);
    }
    
    setLoading(false);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-purple-400">Cargando artículo...</div>
        </main>
        <FooterSection />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl text-white font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-gray-400 mb-8">El artículo que estás buscando no existe o ha sido movido.</p>
          <Link 
            to="/blog" 
            className="bg-purple-600 hover:bg-purple-700 text-white transition-colors rounded-lg shadow-md shadow-purple-900/20 px-6 py-3"
          >
            Volver al blog
          </Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        {/* Article Header with Hero Image */}
        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[40vh] md:h-[50vh] object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
            }}
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-4 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Autor" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="text-white font-medium">Carlos Rodríguez</p>
                    <p className="text-gray-300 text-sm">{article.date} · 10 min de lectura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Contenido del artículo</h2>
            <ul className="space-y-2">
              {article.tableOfContents.map((item, index) => (
                <li key={index} className="text-gray-300 hover:text-purple-400 transition-colors">
                  <a href={`#section-${index + 1}`} className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 text-sm">
                      {index + 1}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Article Sections */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
            
            {article.content.map((section, index) => (
              <div key={index} id={`section-${index + 1}`} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                ))}
                
                {section.image && (
                  <figure className="my-8">
                    <img 
                      src={section.image} 
                      alt={section.imageAlt || section.title} 
                      className="w-full h-auto rounded-xl shadow-lg shadow-purple-900/10"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                      }}
                    />
                    {section.imageCaption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-400">{section.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>
          
          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="flex items-start gap-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Carlos Rodríguez" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Carlos Rodríguez</h3>
                <p className="text-gray-400 mb-4">Especialista en Automatización e IA</p>
                <p className="text-gray-300">
                  Carlos es un experto en automatización de procesos e inteligencia artificial con más de 10 años de experiencia ayudando a empresas a implementar soluciones tecnológicas avanzadas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-8">
            <p className="text-gray-400">Compartir este artículo:</p>
            <div className="flex gap-4">
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`, '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Enlace copiado al portapapeles');
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-900/50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Artículos relacionados</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link to={`/blog/${relatedArticle.slug}`} key={index} className="block group">
                    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <span className="bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                          {relatedArticle.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-purple-400 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-700/20 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para transformar su empresa?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubra cómo podemos ayudarle a implementar soluciones de automatización inteligente para optimizar sus procesos y mejorar su eficiencia operativa.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium rounded-lg px-8 py-4 transition-colors shadow-lg shadow-purple-900/30"
            >
              Contacte con nosotros
            </Link>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default BlogArticle; 