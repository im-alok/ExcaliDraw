
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AuthForm from '../../components/AuthForm';
import AnimatedBackground from '../../components/AnimatedBackground';

const Signup = () => {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <AnimatedBackground />
      <Navbar />
      <div className="container mx-auto px-6 py-28 min-h-screen flex items-center justify-center">
        <AuthForm type="signup" />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
