
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MousePointer, Pencil, Eraser, Square, Circle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto text-center">
          <div className="space-y-2 animate-fade-in-slow">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-white/90">Introducing DrawIt</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Visualize Your Ideas</span>
              <br />
              <span className="text-gradient-teal">Like Never Before</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto">
              A powerful drawing tool for teams and individuals to create, collaborate, and communicate visually.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-primary-teal to-primary-purple text-black font-medium px-8 py-6 h-auto text-lg rounded-full button-glow">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-md px-8 py-6 h-auto text-lg rounded-full hover:bg-white/10 hover:border-white/30 transition-all">
                See Features
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {['No Credit Card Required', 'Free Plan Available', 'Cancel Anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-teal" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl overflow-hidden backdrop-blur-md border border-white/10 shadow-2xl animate-scale-in" style={{ animationDelay: '900ms' }}>
          <div className="w-full h-[460px] bg-surface-light rounded-lg">
            <div className="w-full h-10 flex items-center px-4 border-b border-white/10">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="w-full h-[420px] flex ">
              <div className="text-white/40 font-mono text-sm w-full">
                <div className="pt-12 pb-4 px-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <MousePointer className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="p-2 bg-indigo-100 rounded-md">
                      <Pencil className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Eraser className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Square className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Circle className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="h-64  rounded-lg border relative">
                    {/* Simulated drawing */}
                    <svg width="100%" height="100%" className="absolute inset-0">
                      <path d="M30,50 C100,20 200,30 280,60" stroke="indigo" strokeWidth="2" fill="none" />
                      <path d="M40,120 C120,100 180,140 260,120" stroke="purple" strokeWidth="2" fill="none" />
                      <rect x="50" y="50" width="40" height="40" stroke="blue" strokeWidth="2" fill="none" rx="4" />
                      <circle cx="200" cy="80" r="30" stroke="green" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
