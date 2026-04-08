import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/button';

// Types
export interface FormStep {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'tel' | 'radio' | 'checkbox';
  placeholder?: string;
  validation?: (value: string) => string | null;
  options?: { value: string; label: string }[];
  required?: boolean;
}

export interface ProgressiveFormProps {
  steps: FormStep[];
  onSubmit: (formData: Record<string, string | string[]>) => Promise<void>;
  submitButtonText?: string;
  nextButtonText?: string;
  prevButtonText?: string;
  webhookUrl?: string;
  className?: string;
}

export const ProgressiveForm: React.FC<ProgressiveFormProps> = ({
  steps,
  onSubmit,
  submitButtonText,
  nextButtonText,
  prevButtonText,
  webhookUrl,
  className = '',
}) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null);
  
  // Focus on input when step changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);
  
  const validateStep = () => {
    const step = steps[currentStep];
    const value = formData[step.id] as string || '';
    
    if (step.required && !value) {
      setError(t('form.errors.required'));
      return false;
    }
    
    if (step.validation && value) {
      const validationError = step.validation(value);
      if (validationError) {
        setError(validationError);
        return false;
      }
    }
    
    return true;
  };
  
  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length - 1) {
        setDirection('forward');
        setError(null);
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection('backward');
      setError(null);
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const values = (formData[name] as string[]) || [];
      
      if (checkbox.checked) {
        setFormData({
          ...formData,
          [name]: [...values, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: values.filter((v) => v !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    setError(null);
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(null);
  };
  
  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    const values = (formData[name] as string[]) || [];
    
    if (checked) {
      setFormData({
        ...formData,
        [name]: [...values, value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: values.filter((v) => v !== value),
      });
    }
    
    setError(null);
  };
  
  const handleSubmit = async () => {
    if (validateStep()) {
      setIsSubmitting(true);
      
      try {
        // If webhookUrl is provided, send data directly to it
        if (webhookUrl) {
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
          }
        }
        
        // Call the onSubmit handler provided by the parent
        await onSubmit(formData);
        
        setSubmitSuccess(true);
      } catch (err) {
        console.error('Form submission error:', err);
        setSubmitError(
          err instanceof Error
            ? err.message
            : t('form.errors.generic')
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && steps[currentStep].type !== 'textarea') {
      e.preventDefault();
      if (currentStep === steps.length - 1) {
        handleSubmit();
      } else {
        handleNext();
      }
    } else if (e.key === 'Enter' && e.ctrlKey && steps[currentStep].type === 'textarea') {
      if (currentStep === steps.length - 1) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };
  
  // Render the form content based on current state
  const renderFormContent = () => {
    if (submitSuccess) {
      return (
        <div className="text-center py-12 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('form.success.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('form.success.message')}</p>
          <Button
            onClick={() => {
              setFormData({});
              setCurrentStep(0);
              setSubmitSuccess(false);
              setSubmitError(null);
            }}
            className="btn-primary rounded-lg px-6 py-3"
          >
            {t('form.success.restart')}
          </Button>
        </div>
      );
    }
    
    if (submitError) {
      return (
        <div className="text-center py-12 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('form.error.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('form.error.message')}</p>
          <p className="text-red-500 text-sm mb-8">{submitError}</p>
          <Button
            onClick={() => setSubmitError(null)}
            className="btn-primary rounded-lg px-6 py-3"
          >
            {t('form.error.retry')}
          </Button>
        </div>
      );
    }
    
    const step = steps[currentStep];
    
    return (
      <div 
        className={`transition-all duration-500 ${
          direction === 'forward' 
            ? 'animate-slide-in-right' 
            : 'animate-slide-in-left'
        }`}
      >
        <div className="mb-8 flex justify-between items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-foreground">{step.label}</h2>
              <span className="text-sm text-muted-foreground">
                {currentStep + 1} / {steps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div 
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          {step.type === 'text' && (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              name={step.id}
              value={(formData[step.id] as string) || ''}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={step.placeholder || ''}
              className="w-full bg-background text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-lg"
              autoComplete="off"
            />
          )}
          
          {step.type === 'email' && (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="email"
              name={step.id}
              value={(formData[step.id] as string) || ''}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={step.placeholder || ''}
              className="w-full bg-background text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-lg"
              autoComplete="email"
            />
          )}
          
          {step.type === 'tel' && (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="tel"
              name={step.id}
              value={(formData[step.id] as string) || ''}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={step.placeholder || ''}
              className="w-full bg-background text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-lg"
              autoComplete="tel"
            />
          )}
          
          {step.type === 'textarea' && (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              name={step.id}
              value={(formData[step.id] as string) || ''}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={step.placeholder || ''}
              rows={5}
              className="w-full bg-background text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-lg resize-none"
            />
          )}
          
          {step.type === 'select' && step.options && (
            <select
              ref={inputRef as React.RefObject<HTMLSelectElement>}
              name={step.id}
              value={(formData[step.id] as string) || ''}
              onChange={handleInputChange}
              className="w-full bg-background text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-lg appearance-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
            >
              <option value="">{step.placeholder || t('form.selectOption')}</option>
              {step.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          
          {step.type === 'radio' && step.options && (
            <div className="space-y-3">
              {step.options.map((option) => (
                <label key={option.value} className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-background/80 transition-colors">
                  <input
                    type="radio"
                    name={step.id}
                    value={option.value}
                    checked={(formData[step.id] as string) === option.value}
                    onChange={() => handleRadioChange(step.id, option.value)}
                    className="w-5 h-5 text-primary border-border focus:ring-primary"
                  />
                  <span className="ml-3 text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
          
          {step.type === 'checkbox' && step.options && (
            <div className="space-y-3">
              {step.options.map((option) => (
                <label key={option.value} className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-background/80 transition-colors">
                  <input
                    type="checkbox"
                    name={step.id}
                    value={option.value}
                    checked={((formData[step.id] as string[]) || []).includes(option.value)}
                    onChange={(e) => handleCheckboxChange(step.id, option.value, e.target.checked)}
                    className="w-5 h-5 text-primary border-border rounded focus:ring-primary"
                  />
                  <span className="ml-3 text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
          
          {error && (
            <div className="mt-2 text-red-500 text-sm">{error}</div>
          )}
          
          <div className="flex text-xs text-muted-foreground mt-2">
            {step.type === 'textarea' ? t('form.hints.textareaSubmit') : t('form.hints.keyboardSubmit')}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {currentStep > 0 ? (
            <Button
              type="button"
              onClick={handlePrevious}
              className="btn-secondary rounded-lg px-6 py-3"
            >
              {prevButtonText || t('form.previous')}
            </Button>
          ) : (
            <div></div>
          )}
          
          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="btn-primary rounded-lg px-6 py-3"
            >
              {nextButtonText || t('form.next')}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary rounded-lg px-6 py-3 relative"
            >
              {isSubmitting ? (
                <>
                  <span className="opacity-0">{submitButtonText || t('form.submit')}</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                </>
              ) : (
                submitButtonText || t('form.submit')
              )}
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`bg-card p-6 rounded-xl shadow-lg border border-border ${className}`}>
      {renderFormContent()}
    </div>
  );
}; 