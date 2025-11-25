'use client';

import { Cloud, Code, Smartphone, Shield, Zap, Database } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure that grows with your business. Deploy, manage, and optimize your applications with enterprise-grade reliability.'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business needs. From web apps to enterprise systems, we build it all.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your data and infrastructure. Stay ahead of threats with our advanced protection.'
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence and automation to streamline operations, reduce costs, and gain competitive advantages.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights. Make informed decisions with our advanced analytics and visualization tools.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}