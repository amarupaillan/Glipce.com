          {/* Visualización de Calendario de Google */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-[1.01] transition-transform duration-300 group">
            <div className="relative">
              {/* Background image for calendar section */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500 z-0">
                <div className="absolute inset-0 bg-pattern-teeth opacity-5"></div>
              </div>
              
              <div className="p-4 flex justify-between items-center relative z-10">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ¿Te imaginas tu agenda así de llena todos los días?
                </h3>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full hover:bg-blue-600/70 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 rounded-full hover:bg-blue-600/70 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Header del Calendario */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/90">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  {/* Dental appointments indication */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14h.01M8 14h.01M16 14h.01" />
                </svg>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Calendario de Citas</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-600 dark:text-gray-300 mr-2">Junio 2024</span>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Calendario Semanal */}
            <div className="p-2 overflow-hidden">
              {/* Días de la semana */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">L</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">M</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">X</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">J</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">V</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">S</div>
                <div className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">D</div>
              </div>
              
              {/* Primera fila del calendario */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">1</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">10:00 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">15:00 - Limpieza</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">2</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">11:30 - Revisión</div>
                  </div>
                  <div>
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">16:00 - Consulta</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">3</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">09:00 - Limpieza</div>
                  </div>
                  <div>
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">14:00 - Consulta</div>
                  </div>
                </div>
              </div>
              
              {/* Segunda fila del calendario */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">4</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">10:00 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-red-500 text-white text-xs p-1 rounded w-full truncate hover:bg-red-600 transition-colors shadow-sm">16:30 - Emergencia</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">5</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">11:00 - Revisión</div>
                  </div>
                  <div>
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">15:00 - Limpieza</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">6</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">09:30 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">14:30 - Revisión</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">7</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">10:30 - Limpieza</div>
                  </div>
                  <div>
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">16:00 - Consulta</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">8</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">09:00 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">15:30 - Revisión</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">9</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">11:00 - Limpieza</div>
                  </div>
                  <div>
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">17:00 - Consulta</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">10</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">10:00 - Revisión</div>
                  </div>
                  <div>
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">15:00 - Consulta</div>
                  </div>
                </div>
              </div>
              
              {/* Fila con un día resaltado - Hoy */}
              <div className="grid grid-cols-7 gap-1">
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">11</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">09:30 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">14:30 - Limpieza</div>
                  </div>
                </div>
                <div className="h-20 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-1 relative border-2 border-blue-500 transform hover:scale-[1.05] transition-transform hover:shadow-lg">
                  <div className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-semibold text-white">12</div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-semibold text-white animate-pulse">3</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">11:00 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-purple-500 text-white text-xs p-1 rounded w-full truncate hover:bg-purple-600 transition-colors shadow-sm">16:30 - Revisión</div>
                  </div>
                  <div className="mt-1">
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">18:00 - Limpieza</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 relative hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-xs font-semibold">13</div>
                  <div className="mt-5 mb-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded w-full truncate hover:bg-blue-600 transition-colors shadow-sm">10:30 - Consulta</div>
                  </div>
                  <div>
                    <div className="bg-green-500 text-white text-xs p-1 rounded w-full truncate hover:bg-green-600 transition-colors shadow-sm">15:00 - Limpieza</div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
            
            {/* Estadísticas de citas con microinteracciones */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4 bg-gray-50 dark:bg-gray-800/80">
              <div className="text-center transform hover:scale-105 transition-transform cursor-pointer group">
                <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11h.01M16 11h.01M12 15h.01M16 15h.01" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Citas mensuales</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">47</p>
                <p className="text-xs text-green-600 flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +68% más que antes
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform cursor-pointer group">
                <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pacientes nuevos</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">23</p>
                <p className="text-xs text-green-600 flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9 de cada 10 se convierten
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform cursor-pointer group">
                <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tasa de ocupación</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">92%</p>
                <p className="text-xs text-green-600 flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sin tu intervención directa
                </p>
              </div>
            </div>
            
            {/* Persona que aparece al lado del calendario */}
            <div className="absolute -right-16 bottom-20 hidden lg:block">
              <div className="relative">
                <img 
                  src="/assets/images/dentist-calendar.png" 
                  alt="Dentista feliz mirando el calendario" 
                  className="w-40 h-auto rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  ¡En tiempo real!
                </div>
              </div>
            </div>
          </div> 