import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TechFlow
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">AI & Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Press Kit</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 TechFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}