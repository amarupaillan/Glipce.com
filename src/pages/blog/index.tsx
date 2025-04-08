import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { blogArticles } from "./articleData";

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = Array.from(
    new Set(blogArticles.map((article) => article.category))
  );

  // Filter articles based on category and search term
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-black to-purple-900/20 py-20 md:py-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 md:left-1/4 top-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute right-10 md:right-1/3 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Nuestro Blog
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
              Descubra las últimas tendencias y estrategias en automatización, inteligencia artificial y transformación digital para empresas.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/10 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative w-full md:w-auto">
                  <select
                    value={selectedCategory || ""}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full md:w-64 appearance-none bg-white/10 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Todas las categorías</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link 
                  to={`/blog/${article.slug}`} 
                  key={article.id}
                  className="group bg-gray-900/40 hover:bg-gray-800/40 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-all hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Autor" 
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-gray-400">Carlos Rodríguez</span>
                      </div>
                      <span className="text-purple-500 group-hover:text-purple-400 font-medium flex items-center gap-1">
                        Leer más
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-white mb-2">No se encontraron artículos</h3>
              <p className="text-gray-400 mb-8">Intente con otros términos de búsqueda o categoría</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Ver todos los artículos
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-700/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Manténgase actualizado con nuestras novedades
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Suscríbase a nuestro newsletter y reciba los últimos artículos, tutoriales y noticias sobre automatización e inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="flex-grow bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-lg shadow-purple-900/30"
              >
                Suscribirse
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Respetamos su privacidad. Puede darse de baja en cualquier momento.
            </p>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default BlogPage; 