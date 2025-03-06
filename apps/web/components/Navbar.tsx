"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@repo/ui/button';
import { PenTool, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass-morphism' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-teal to-primary-purple">
            <PenTool className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity">
            DrawIt
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-primary-teal hover:bg-white/5 transition-all">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-primary-teal to-primary-purple text-black font-medium px-6 py-5 h-auto rounded-full hover:shadow-[0_0_15px_rgba(15,244,198,0.5)] transition-all duration-300 flex ">
              <span>Sign Up</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
