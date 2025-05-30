import React from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { 
  Card, 
  CardContent
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export const PricingSection = (): JSX.Element => {
  // Data for pricing plans
  const pricingPlans = [
    {
      title: "PRO",
      price: "299€",
      tag: "/mes",
      features: [
        { name: "Página Web", included: false },
        { name: "Videos/mes", value: "0" },
        { name: "Agentes IA", value: "1" },
        { name: "Ideal para", value: "Negocios activos con redes sociales" }
      ],
      buttonText: "Saber más",
    },
    {
      title: "PRO Web",
      price: "599€",
      tag: "/mes",
      features: [
        { name: "Página Web", included: true },
        { name: "Videos/mes", value: "0" },
        { name: "Agentes IA", value: "1" },
        { name: "Ideal para", value: "Negocios sin página web" }
      ],
      buttonText: "Saber más",
      popular: true,
    },
    {
      title: "PRO Plus",
      price: "599€",
      tag: "/mes",
      features: [
        { name: "Página Web", included: false },
        { name: "Videos/mes", value: "4" },
        { name: "Agentes IA", value: "1" },
        { name: "Ideal para", value: "Negocios con redes que quieren escalar" }
      ],
      buttonText: "Saber más",
    },
    {
      title: "PLATINO",
      price: "999€",
      tag: "/mes",
      features: [
        { name: "Página Web", included: true },
        { name: "Videos/mes", value: "6" },
        { name: "Agentes IA", value: "3" },
        { name: "Ideal para", value: "Negocios que buscan automatización total y presencia sólida" }
      ],
      buttonText: "Saber más",
    }
  ];

  return (
    <div id="planes" className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-3 border border-white/50 bg-transparent hover:border-purple-400 transition-colors px-4 py-1 rounded-full">
            <span className="text-white text-xs">Elige tu plan</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Planes
          </h2>
          <p className="max-w-2xl text-gray-300 text-center">
            Elige el plan que mejor se adapte a tus necesidades y comienza a impulsar tu negocio con IA
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800/50 rounded-xl overflow-hidden border border-white/10">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-white font-medium">Plan</th>
                <th className="px-6 py-4 text-center text-white font-medium">Página Web</th>
                <th className="px-6 py-4 text-center text-white font-medium">Videos/mes</th>
                <th className="px-6 py-4 text-center text-white font-medium">Agentes IA</th>
                <th className="px-6 py-4 text-left text-white font-medium">Ideal para</th>
                <th className="px-6 py-4 text-center text-white font-medium">Precio</th>
              </tr>
            </thead>
            <tbody>
              {pricingPlans.map((plan, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-black/20' : ''} hover:bg-purple-900/20 transition-colors`}>
                  <td className="px-6 py-4 text-white font-medium">
                    <div className="flex items-center gap-2">
                      {plan.title}
                      {plan.popular && (
                        <Badge className="bg-purple-600 text-white border-none">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {plan.features[0].included ? 
                      <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : 
                      <XIcon className="w-6 h-6 text-red-500 mx-auto" />
                    }
                  </td>
                  <td className="px-6 py-4 text-white text-center">{plan.features[1].value}</td>
                  <td className="px-6 py-4 text-white text-center">{plan.features[2].value}</td>
                  <td className="px-6 py-4 text-white">{plan.features[3].value}</td>
                  <td className="px-6 py-4 text-white text-center">
                    <div className="font-bold">{plan.price}</div>
                    <div className="text-sm text-gray-400">{plan.tag}</div>
                    <Button 
                      className="mt-2 bg-white text-black hover:bg-gray-100 text-sm px-4 py-1"
                      onClick={() => window.open('/contacto', '_self')}
                    >
                      {plan.buttonText}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile view cards */}
        <div className="md:hidden mt-8 grid grid-cols-1 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="bg-black/30 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/60">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  {plan.popular && (
                    <Badge className="bg-gradient-to-r from-purple-900 to-purple-700 text-white border-none px-3 py-1">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="ml-1 text-sm text-white/70">{plan.tag}</span>
                </div>
                
                <ul className="space-y-3 mb-4">
                  <li className="flex justify-between">
                    <span className="text-white/70">Página Web:</span>
                    {plan.features[0].included ? 
                      <CheckIcon className="w-5 h-5 text-green-500" /> : 
                      <XIcon className="w-5 h-5 text-red-500" />
                    }
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/70">Videos/mes:</span>
                    <span className="text-white">{plan.features[1].value}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/70">Agentes IA:</span>
                    <span className="text-white">{plan.features[2].value}</span>
                  </li>
                  <li>
                    <span className="text-white/70 block mb-1">Ideal para:</span>
                    <span className="text-white text-sm">{plan.features[3].value}</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-2">
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}; 