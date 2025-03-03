
import Link from 'next/link';
import { PenTool, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-teal to-primary-purple">
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity">
                DrawIt
              </span>
            </Link>
            <p className="text-white/60 max-w-xs">
              A powerful drawing tool for teams and individuals to create, collaborate, and communicate visually.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Download', 'Updates'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-primary-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-primary-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Terms', 'Privacy', 'Cookies', 'Licenses'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-primary-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DrawIt. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-white/60 hover:text-primary-teal transition-colors"
                aria-label={`Social media link ${i + 1}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
