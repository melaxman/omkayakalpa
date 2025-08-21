import React from 'react';
import { ArrowRight, Heart, Users, Award, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Holistic Wellness",
      description: "Mind, body, and soul alignment through ancient practices"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Expert Instructors",
      description: "Certified yoga masters with years of experience"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Proven Results",
      description: "Thousands of satisfied students worldwide"
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Natural Approach",
      description: "Eco-friendly practices and sustainable wellness"
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-amber-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Om Kaya Kalpa
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform your life through the ancient wisdom of yoga. 
              Discover inner peace, physical strength, and spiritual awakening.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Om Kaya Kalpa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of traditional yoga wisdom and modern wellness practices
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 100}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Yoga Practice"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-amber-400 rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideRight" delay={200}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Discover Your Inner Strength
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Om Kaya Kalpa, we believe that yoga is more than just physical exercise. 
                It's a journey of self-discovery, healing, and transformation that touches 
                every aspect of your life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced instructors guide you through traditional and modern yoga 
                practices, helping you build strength, flexibility, and mindfulness.
              </p>
              <Link
                to="/about"
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;