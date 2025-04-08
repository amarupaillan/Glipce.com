import React, { useState, useEffect } from "react";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";

export default function CalculadoraROI(): JSX.Element {
  // State for calculator inputs
  const [hoursSpent, setHoursSpent] = useState<number>(40);
  const [hourlyRate, setHourlyRate] = useState<number>(25);
  const [employeesCount, setEmployeesCount] = useState<number>(5);
  const [automationCost, setAutomationCost] = useState<number>(5000);
  const [timeReduction, setTimeReduction] = useState<number>(80);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  
  // Calculate ROI
  const calculateSavings = () => {
    // Calculate current process cost (monthly)
    const currentCost = hoursSpent * hourlyRate * employeesCount;
    
    // Calculate cost after automation
    const newTime = hoursSpent * (1 - timeReduction / 100);
    const newCost = newTime * hourlyRate * employeesCount;
    
    // Calculate monthly savings
    const monthlySavings = currentCost - newCost;
    
    // Calculate annual savings
    const annualSavings = monthlySavings * 12;
    
    // Calculate ROI
    const roi = (annualSavings / automationCost) * 100;
    
    // Calculate payback period in months
    const paybackPeriod = automationCost / monthlySavings;
    
    return {
      currentCost,
      newCost,
      monthlySavings,
      annualSavings,
      roi,
      paybackPeriod
    };
  };
  
  const results = calculateSavings();
  
  // Use effect to trigger animations when values change
  useEffect(() => {
    setShowAnimation(true);
    const timer = setTimeout(() => setShowAnimation(false), 700);
    return () => clearTimeout(timer);
  }, [hoursSpent, hourlyRate, employeesCount, automationCost, timeReduction]);

  // Helper function to get a color based on ROI value
  const getROIColor = () => {
    if (results.roi < 50) return 'from-orange-500 to-red-500';
    if (results.roi < 100) return 'from-yellow-500 to-orange-500';
    if (results.roi < 200) return 'from-green-500 to-emerald-500';
    return 'from-blue-500 to-purple-500';
  };

  // Helper function to get a color based on payback period
  const getPaybackColor = () => {
    if (results.paybackPeriod > 12) return 'from-red-500 to-orange-500';
    if (results.paybackPeriod > 6) return 'from-orange-500 to-yellow-500';
    if (results.paybackPeriod > 3) return 'from-green-500 to-emerald-500';
    return 'from-blue-500 to-purple-500';
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-purple-900/20 to-transparent z-0"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated graph pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDEgNTYgMGEyOCAyOCAwIDEgMS01NiAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-block relative">
              <div className="absolute -top-10 -left-10 w-20 h-20">
                <svg className="w-full h-full text-purple-500 opacity-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16">
                <svg className="w-full h-full text-blue-500 opacity-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                Calculadora de ROI
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-8xl text-purple-600/10 font-bold z-0 whitespace-nowrap">
                  CALCULADORA
                </span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg relative z-10 mt-4">
              Estime el retorno de inversión de implementar soluciones de automatización
              en sus procesos empresariales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 shadow-lg shadow-purple-900/5 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
              
              {/* Input form */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Ingrese los datos de su proceso</h2>
                  <div className="ml-3 h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <label htmlFor="hours-spent" className="flex justify-between items-baseline text-sm font-medium mb-2">
                      <span className="text-gray-300">Horas mensuales dedicadas al proceso</span>
                      <span className="text-purple-400 font-bold text-lg">{hoursSpent} hrs</span>
                    </label>
                    <div className="relative pt-3">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" 
                          style={{ width: `${(hoursSpent / 160) * 100}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        id="hours-spent"
                        min="1"
                        max="160"
                        step="1"
                        value={hoursSpent}
                        onChange={(e) => setHoursSpent(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 hora</span>
                      <span>160 horas</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hourly-rate" className="flex justify-between items-baseline text-sm font-medium mb-2">
                      <span className="text-gray-300">Costo por hora del personal (USD)</span>
                      <span className="text-purple-400 font-bold text-lg">${hourlyRate}</span>
                    </label>
                    <div className="relative pt-3">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" 
                          style={{ width: `${(hourlyRate / 100) * 100}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        id="hourly-rate"
                        min="5"
                        max="100"
                        step="1"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$5</span>
                      <span>$100</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="employees-count" className="flex justify-between items-baseline text-sm font-medium mb-2">
                      <span className="text-gray-300">Número de empleados involucrados</span>
                      <span className="text-purple-400 font-bold text-lg">{employeesCount}</span>
                    </label>
                    <div className="relative pt-3">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" 
                          style={{ width: `${(employeesCount / 50) * 100}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        id="employees-count"
                        min="1"
                        max="50"
                        step="1"
                        value={employeesCount}
                        onChange={(e) => setEmployeesCount(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 empleado</span>
                      <span>50 empleados</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="automation-cost" className="flex justify-between items-baseline text-sm font-medium mb-2">
                      <span className="text-gray-300">Costo estimado de la automatización (USD)</span>
                      <span className="text-purple-400 font-bold text-lg">${automationCost.toLocaleString()}</span>
                    </label>
                    <div className="relative pt-3">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" 
                          style={{ width: `${(automationCost / 50000) * 100}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        id="automation-cost"
                        min="1000"
                        max="50000"
                        step="500"
                        value={automationCost}
                        onChange={(e) => setAutomationCost(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$1,000</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time-reduction" className="flex justify-between items-baseline text-sm font-medium mb-2">
                      <span className="text-gray-300">Reducción esperada de tiempo (%)</span>
                      <span className="text-purple-400 font-bold text-lg">{timeReduction}%</span>
                    </label>
                    <div className="relative pt-3">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" 
                          style={{ width: `${(timeReduction / 95) * 100}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        id="time-reduction"
                        min="10"
                        max="95"
                        step="5"
                        value={timeReduction}
                        onChange={(e) => setTimeReduction(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10%</span>
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 shadow-lg shadow-purple-900/5 overflow-hidden">
              <div className="p-6 bg-gradient-to-b from-purple-900/20 to-transparent">
                <h2 className="text-xl font-bold text-white mb-1">Resultados</h2>
                <p className="text-sm text-gray-400">Basados en los datos proporcionados</p>
              </div>
              
              <div className="p-6 space-y-8 relative">
                {/* Cost comparison graph */}
                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
                  <h3 className="text-sm font-medium text-gray-400 mb-4">Comparación de costos mensuales</h3>
                  <div className="relative h-16 flex items-end">
                    <div className="h-full flex items-center justify-center gap-2 mb-1">
                      <div className="relative z-10">
                        <div 
                          className={`w-12 bg-gradient-to-t from-red-500 to-orange-500 rounded-t-lg transition-all duration-700 ease-out ${showAnimation ? 'scale-y-100' : 'scale-y-0'}`} 
                          style={{ height: `100%`, transformOrigin: 'bottom' }}
                        ></div>
                        <div className="absolute inset-0 bg-white/10 rounded-t-lg"></div>
                      </div>
                      <div className="relative z-10">
                        <div 
                          className={`w-12 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t-lg transition-all duration-700 ease-out ${showAnimation ? 'scale-y-100' : 'scale-y-0'}`} 
                          style={{ height: `${(results.newCost / results.currentCost) * 100}%`, transformOrigin: 'bottom' }}
                        ></div>
                        <div className="absolute inset-0 bg-white/10 rounded-t-lg"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full h-px bg-gray-700"></div>
                  </div>
                  <div className="flex justify-around text-center mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Actual</p>
                      <p className="text-lg font-bold text-white">${results.currentCost.toFixed(0)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Con automatización</p>
                      <p className="text-lg font-bold text-green-500">${results.newCost.toFixed(0)}</p>
                    </div>
                  </div>
                </div>
                
                {/* Savings */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <h3 className="text-xs font-medium text-gray-400 mb-1">Ahorro mensual</h3>
                    <p className={`text-xl font-bold text-green-500 transition-all duration-300 ${showAnimation ? 'scale-110' : 'scale-100'}`}>
                      ${results.monthlySavings.toFixed(0)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <h3 className="text-xs font-medium text-gray-400 mb-1">Ahorro anual</h3>
                    <p className={`text-xl font-bold text-green-500 transition-all duration-300 ${showAnimation ? 'scale-110' : 'scale-100'}`}>
                      ${results.annualSavings.toFixed(0)}
                    </p>
                  </div>
                </div>
                
                {/* ROI gauge */}
                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
                  <h3 className="text-sm font-medium text-gray-400 mb-3">ROI anual</h3>
                  <div className="relative h-6 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getROIColor()} transition-all duration-700`} 
                      style={{ width: `${Math.min(100, results.roi / 3)}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold">{results.roi.toFixed(0)}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0%</span>
                    <span>100%</span>
                    <span>200%</span>
                    <span>300%+</span>
                  </div>
                </div>
                
                {/* Payback period */}
                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Periodo de recuperación</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle 
                          cx="50" cy="50" r="45" 
                          fill="transparent" 
                          stroke="#374151" 
                          strokeWidth="10" 
                        />
                        <circle 
                          cx="50" cy="50" r="45" 
                          fill="transparent" 
                          stroke="url(#payback-gradient)" 
                          strokeWidth="10" 
                          strokeDasharray="283" 
                          strokeDashoffset={283 - (283 * Math.min(1, Math.max(0, 12 - results.paybackPeriod) / 12))}
                          className="transition-all duration-700" 
                        />
                        <defs>
                          <linearGradient id="payback-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className={`${getPaybackColor().split(' ')[0]}`} />
                            <stop offset="100%" className={`${getPaybackColor().split(' ')[1]}`} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{results.paybackPeriod.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-bold text-white">{results.paybackPeriod.toFixed(1)} meses</p>
                      <p className="text-xs text-gray-500">para recuperar la inversión</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 rounded-2xl border border-purple-900/20 shadow-xl shadow-purple-900/5 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white ml-4">¿Qué significa este ROI para su empresa?</h2>
              </div>
              
              <div className="prose prose-invert prose-purple max-w-none">
                <p>
                  La calculadora de ROI proporciona una estimación básica del retorno potencial de su inversión en soluciones de automatización. 
                  Para un análisis más detallado y personalizado, tenga en cuenta que:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 flex">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Más que ahorro de costos</h3>
                      <p className="text-gray-400 text-sm m-0">Los beneficios van más allá del ahorro directo y afectan toda su operación</p>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 flex">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Reducción de errores</h3>
                      <p className="text-gray-400 text-sm m-0">Mejora la calidad del trabajo y la satisfacción del cliente</p>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 flex">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Personal más productivo</h3>
                      <p className="text-gray-400 text-sm m-0">Su equipo puede dedicarse a tareas de mayor valor añadido</p>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 flex">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Mejor toma de decisiones</h3>
                      <p className="text-gray-400 text-sm m-0">La captura de datos mejorada permite decisiones más acertadas</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  Esta calculadora es una herramienta orientativa. Para un análisis detallado de su caso específico, 
                  nuestros consultores pueden ayudarle a identificar oportunidades de optimización y calcular 
                  el valor real que la automatización puede aportar a su organización.
                </p>
              </div>
              
              <div className="mt-10 flex justify-center">
                <a
                  href="/contacto"
                  className="group inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-900/20 transition-all"
                >
                  <svg className="mr-2 -ml-1 w-5 h-5 text-purple-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Solicitar asesoramiento personalizado
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
} 