import React from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { useTranslation } from "react-i18next";

export default function ExitoPage(): JSX.Element {
  const { t } = useTranslation();
  
  // Success stories data
  const successStories = [
    {
      id: 1,
      clientKey: "fintech",
      industryKey: "financial",
      challengeKey: "fintechChallenge",
      solutionKey: "fintechSolution",
      resultsKey: "fintechResults",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      clientKey: "logistics",
      industryKey: "transportation",
      challengeKey: "logisticsChallenge",
      solutionKey: "logisticsSolution",
      resultsKey: "logisticsResults",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      clientKey: "retail",
      industryKey: "retail",
      challengeKey: "retailChallenge",
      solutionKey: "retailSolution", 
      resultsKey: "retailResults",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      clientKey: "healthcare",
      industryKey: "healthcare",
      challengeKey: "healthcareChallenge",
      solutionKey: "healthcareSolution",
      resultsKey: "healthcareResults",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      clientKey: "education",
      industryKey: "education",
      challengeKey: "educationChallenge",
      solutionKey: "educationSolution",
      resultsKey: "educationResults",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      clientKey: "manufacturing",
      industryKey: "manufacturing",
      challengeKey: "manufacturingChallenge",
      solutionKey: "manufacturingSolution",
      resultsKey: "manufacturingResults",
      image: "https://images.unsplash.com/photo-1581091226033-c6e1f4b37be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mb-8">
              {t('successStories.title')}
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              {t('successStories.description')}
            </p>
          </div>
          
          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-purple-900/10 transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image}
                    alt={`${t(`successStories.clients.${story.clientKey}`)} - ${t(`successStories.industries.${story.industryKey}`)}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/800x400/1a1a2e/ffffff?text=${t(`successStories.industries.${story.industryKey}`).replace(' ', '+')}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-white">{t(`successStories.clients.${story.clientKey}`)}</h3>
                    <span className="bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      {t(`successStories.industries.${story.industryKey}`)}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">{t('successStories.challenge')}</h4>
                      <p className="text-gray-300 text-sm">{t(`successStories.challenges.${story.challengeKey}`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">{t('successStories.solution')}</h4>
                      <p className="text-gray-300 text-sm">{t(`successStories.solutions.${story.solutionKey}`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-purple-400 mb-1">{t('successStories.results')}</h4>
                      <p className="text-gray-300 text-sm">{t(`successStories.resultsList.${story.resultsKey}`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonials Section */}
          <div className="bg-gradient-to-r from-gray-900 to-purple-900/20 rounded-2xl p-8 border border-gray-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('testimonials.subtitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((index) => (
                <div key={index} className="bg-black/30 p-6 rounded-xl border border-gray-800">
                  <p className="italic text-gray-300 mb-4">"{t(`successStories.longQuotes.${index}.quote`)}"</p>
                  <div>
                    <p className="font-medium text-white">{t(`successStories.longQuotes.${index}.author`)}</p>
                    <p className="text-gray-400 text-sm">{t(`successStories.longQuotes.${index}.position`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{t('common.wantToBeNextSuccess')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t('common.contactUsToday')}
            </p>
            <a 
              href="/contacto" 
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg inline-block font-medium transition-colors shadow-lg shadow-purple-900/20"
            >
              {t('common.contactNow')}
            </a>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
} 