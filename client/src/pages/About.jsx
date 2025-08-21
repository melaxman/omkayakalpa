import React from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Om Kaya Kalpa</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A sanctuary for mind, body, and soul transformation through the ancient wisdom of yoga
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                  alt="Yoga Studio"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-amber-400 rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
            
<AnimatedSection animation="slideRight" delay={200}>
  <p className="text-lg text-gray-600 mb-6 leading-relaxed relative -top-20">
    Kaya Kalpa Wellness is Nepal’s premier holistic healing and wellness destination, 
    offering a wide range of transformative therapies and lifestyle consultations. We specialize in 
    healing, life coaching, Kasya Thali therapy, Kirlian aura photography, hydrogen inhalation, 
    sauna and jacuzzi therapy, meditation, and lifestyle training. As a pioneering center 
    in Nepal, we also provide high-quality herbal supplements to support a naturally healthier 
    life. Experience wellness like never before—where ancient wisdom meets modern healing.
  </p>
</AnimatedSection>

          </div>
        </div>
      </section>     
    </div>
  );
};

export default About;
