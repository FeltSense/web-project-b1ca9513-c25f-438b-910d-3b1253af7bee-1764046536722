'use client';

import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-cyan-900/90"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Empower your business with innovative tech solutions designed for the modern world. 
            Experience seamless integration and unparalleled performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#signup"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="pt-12 flex items-center justify-center gap-12 text-white">
            <div>
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="h-12 w-px bg-blue-400"></div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
            <div className="h-12 w-px bg-blue-400"></div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}