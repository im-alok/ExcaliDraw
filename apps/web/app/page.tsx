
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { Calendar } from '../components/src/ui/calendar';

const Page = () => {
  return (
    <div className="min-h-screen bg-surface-dark text-white scrollbar-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      
    </div>
  );
};

export default Page;
