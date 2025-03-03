
import { PenTool, Share2, Users, Zap, Palette, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <PenTool className="w-10 h-10 text-primary-teal" />,
    title: 'Intuitive Drawing Tools',
    description: 'Sketch, draw, and illustrate with precision using our powerful yet simple tools.'
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary-teal" />,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, no matter where they are located.'
  },
  {
    icon: <Users className="w-10 h-10 text-primary-teal" />,
    title: 'Team Management',
    description: 'Organize your team, assign tasks, and manage permissions with ease.'
  },
  {
    icon: <Zap className="w-10 h-10 text-primary-teal" />,
    title: 'Lightning Fast',
    description: 'Experience smooth performance even with complex drawings and multiple collaborators.'
  },
  {
    icon: <Palette className="w-10 h-10 text-primary-teal" />,
    title: 'Beautiful UI',
    description: 'Enjoy a sleek, modern interface designed for focus and productivity.'
  },
  {
    icon: <ArrowUpRight className="w-10 h-10 text-primary-teal" />,
    title: 'Export & Share',
    description: 'Export your creations in multiple formats and share them with anyone instantly.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Powerful Features</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to bring your ideas to life and collaborate effectively with your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-morphism p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
