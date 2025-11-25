'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: 'Leading our technology vision with over 15 years of experience in enterprise software development and cloud architecture.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    quote: 'Pioneering AI solutions that transform business operations. PhD in Computer Science from Stanford University.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Product Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    quote: 'Creating intuitive, beautiful user experiences that delight customers and drive engagement across all platforms.'
  },
  {
    name: 'David Park',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    quote: 'Building scalable systems that power millions of transactions. Former senior engineer at major tech companies.'
  },
  {
    name: 'Jessica Williams',
    role: 'Head of Security',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    quote: 'Ensuring enterprise-grade security and compliance. Certified in multiple security frameworks and standards.'
  },
  {
    name: 'Alex Thompson',
    role: 'Customer Success Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'Dedicated to ensuring every client achieves their business goals with our technology solutions.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(teamMembers[(currentIndex + i) % teamMembers.length]);
    }
    return visible;
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Industry experts committed to delivering excellence and innovation
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleMembers().map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{member.quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}