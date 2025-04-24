import React, { useState } from "react";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { ProgressiveForm, FormStep } from "../components/forms/ProgressiveForm";
import { useTranslation } from "../hooks/useTranslation";

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const calendlyUrl = "https://calendly.com/amarupaillan1966/30min";

  // Define form steps
  const formSteps: FormStep[] = [
    {
      id: 'name',
      label: t('Nombre completo'),
      type: 'text',
      placeholder: t('Ingresa tu nombre completo'),
      required: true
    },
    {
      id: 'email',
      label: t('Correo electrónico'),
      type: 'email',
      placeholder: t('correo@ejemplo.com'),
      required: true,
      validation: (value) => {
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return t('Por favor, ingresa un correo electrónico válido');
        }
        return null;
      }
    },
    {
      id: 'phone',
      label: t('Teléfono (opcional)'),
      type: 'tel',
      placeholder: '+34 600 000 000',
      required: false,
      validation: (value) => {
        if (value && !value.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)) {
          return t('Formato de teléfono inválido');
        }
        return null;
      }
    },
    {
      id: 'company',
      label: t('Empresa'),
      type: 'text',
      placeholder: t('Nombre de tu empresa'),
      required: false
    },
    {
      id: 'service',
      label: t('¿Qué servicio te interesa?'),
      type: 'select',
      placeholder: t('Selecciona un servicio'),
      options: [
        { value: 'video', label: t('Producción de videos') },
        { value: 'web', label: t('Landing page / Página web') },
        { value: 'ai', label: t('Agentes de IA') },
        { value: 'combo', label: t('Embudo de ventas completo') },
        { value: 'other', label: t('Otro / No estoy seguro') }
      ],
      required: true
    },
    {
      id: 'message',
      label: t('¿Cómo podemos ayudarte?'),
      type: 'textarea',
      placeholder: t('Cuéntanos un poco sobre tu proyecto o necesidad'),
      required: true
    }
  ];

  // Form submission handler
  const handleFormSubmit = async (formData: Record<string, string | string[]>) => {
    console.log('Form data:', formData);
    
    try {
      // Añadir timestamp para la columna de fecha
      const dataToSend = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Enviar datos al webhook de n8n
      const response = await fetch(
        'https://glipce.app.n8n.cloud/webhook-test/347f9c31-63db-42e4-b806-0891c8ae9d27', // ← REEMPLAZA ESTA URL con tu webhook real de n8n
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend)
        }
      );
      
      if (!response.ok) {
        throw new Error(t('Error al enviar el formulario'));
      }
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error(t('Error al enviar el formulario:'), error);
      // Aquí podrías manejar el error, mostrando un mensaje al usuario
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form column */}
            <div className="relative z-10 bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-10">
              <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("Hablemos sobre tu proyecto")}
                </h1>
                
                <div className="flex items-center justify-center mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("Respuesta en menos de 24 horas")}
                  </span>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("Completa el formulario y te contactaremos para discutir cómo podemos ayudarte")}
                </p>
              </div>
              
              <ProgressiveForm
                steps={formSteps}
                onSubmit={handleFormSubmit}
                className="max-w-xl mx-auto"
                nextButtonText={t("form.next")}
                prevButtonText={t("form.previous")}
                submitButtonText={t("form.submit")}
              />
            </div>
            
            {/* Contact info column */}
            <div className="space-y-10">
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 rounded-full bg-purple-100 dark:bg-purple-700/20 blur-3xl"></div>
                
                <h3 className="relative z-10 text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {t("Otras formas de contacto")}
                </h3>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{t("Email")}</h4>
                      <p className="mb-1 text-gray-500 dark:text-gray-400">{t("Escríbenos para cualquier consulta comercial")}</p>
                      <a href="mailto:info@glipce.com" className="text-purple-500 hover:text-purple-600 font-medium">info@glipce.com</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{t("Teléfono")}</h4>
                      <p className="mb-1 text-gray-500 dark:text-gray-400">{t("Disponible de lunes a viernes de 9:00 a 18:00")}</p>
                      <a href="tel:+34911234567" className="text-purple-500 hover:text-purple-600 font-medium">+34 911 234 567</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{t("WhatsApp")}</h4>
                      <p className="mb-1 text-gray-500 dark:text-gray-400">{t("Respuesta rápida vía WhatsApp Business")}</p>
                      <a href="https://wa.me/34911234567" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 font-medium">
                        {t("Iniciar chat")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Commitment to respond */}
              <div className="rounded-2xl border bg-purple-50 border-purple-100 dark:bg-purple-900/20 dark:border-purple-900/40 p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-purple-200 dark:bg-purple-800/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-700 dark:text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-900 dark:text-purple-200 mb-2">
                      {t("Nuestro compromiso")}
                    </h4>
                    <p className="text-purple-800 dark:text-purple-300">
                      {t("Te responderemos en menos de 24 horas con un análisis personalizado de tu proyecto y las mejores opciones para alcanzar tus objetivos.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default ContactPage; 