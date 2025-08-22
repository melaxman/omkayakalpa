import React from 'react';
import { Leaf, Activity, Coffee, Apple, Smile, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Import service images
import HolisticImg from '../assets/images/services/holistic.jpg';
import FitnessImg from '../assets/images/services/fitness.jpg';
import SpaImg from '../assets/images/services/spa.jpg';
import NutritionImg from '../assets/images/services/nutrition.jpg';
import MentalImg from '../assets/images/services/mental.jpg';
import MedicalImg from '../assets/images/services/medical.jpg';



  import KansyaThaliTherapy from '../assets/images/kansya.png';
  import Kirlianaura from '../assets/images/kirlian.jpg';
  import HydrogrnInhale from '../assets/images/hydrogeninhale.png';
  import Healing from '../assets/images/healing.png';
  import Jacuzzi from '../assets/images/jacuzzi.jpg';


const ServicesList = () => {

  const services = [
    { 
      name: "Holistic & Alternative Therapies", 
      icon: <Leaf className="w-5 h-5" />, 
      image: HolisticImg,
      description: "We believe true healing begins with balance. Our holistic and alternative therapies such as massage, acupuncture, Ayurveda, reiki, and energy healing are designed to restore harmony to your body, mind, and spirit. These treatments not only relieve stress and pain but also promote natural healing and long-term well-being."
    },
    { 
      name: "Fitness & Body Wellness", 
      icon: <Activity className="w-5 h-5" />, 
      image: FitnessImg,
      description: "A strong body supports a healthy life. We provide yoga, pilates, functional training, and personalized fitness coaching to enhance strength, posture, and flexibility. Whether you’re a beginner or advanced, our wellness programs are tailored to your needs, helping you feel more active, energetic, and confident in your daily life."
    },
    { 
      name: "Spa & Relaxation Services", 
      icon: <Coffee className="w-5 h-5" />, 
      image: SpaImg,
      description: "Relaxation is essential to health, and our spa services are crafted to help you recharge. From calming massages and skin-nourishing facials to body scrubs, wraps, and detox therapies, each treatment is an escape from daily stress. Our serene environment ensures you leave feeling refreshed, renewed, and deeply relaxed."
    },
    { 
      name: "Nutrition & Lifestyle Guidance", 
      icon: <Apple className="w-5 h-5" />, 
      image: NutritionImg,
      description: "True wellness begins from within. Our nutrition and lifestyle experts provide customized diet plans, weight management support, and practical coaching to help you adopt sustainable healthy habits. With a focus on balance and nourishment, we guide you toward choices that improve energy, immunity, and overall quality of life."
    },
    { 
      name: "Mental Health & Emotional Well-being", 
      icon: <Smile className="w-5 h-5" />, 
      image: MentalImg,
      description: "Your mind deserves the same care as your body. We provide counseling, meditation practices, stress relief programs, and life coaching to support your emotional resilience. Our aim is to help you manage daily challenges with clarity, build inner peace, and nurture a positive, fulfilling outlook on life."
    },
    { 
      name: "Medical & Preventive Wellness", 
      icon: <Shield className="w-5 h-5" />, 
      image: MedicalImg,
      description: "Prevention is the best cure. Alongside holistic care, we provide physiotherapy, rehabilitation, chronic pain management, and preventive health checkups. By combining natural healing with modern medical approaches, we help you maintain long-term wellness and protect your health before issues arise."
    }
  ];

  
  const premiumTherapy = [
    {
      title: "Kansya Thali Therapy",
      image: KansyaThaliTherapy
    },
    {
      title: "Kirlian Aura Photography",
      image: Kirlianaura
    },
    {
      title: "Hydrogen Inhalation Therapy",
      image: HydrogrnInhale
    },
    {
      title: "Healing",
      image: Healing
    },
    {
      title: "Jacuzzi",
      image: Jacuzzi
    }
  ];
  

  return (
    <div className="pt-20 min-h-screen">

      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive wellness services designed to improve your health and lifestyle
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 100}
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image */}
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2">
                  <div className="flex items-center mb-3">
                    <div className="p-3 mr-3 bg-green-100 text-green-600 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Premium Therapy Section commented out */}

      <section className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Premium Therapy</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumTherapy.map((premium, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 100}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={premium.image}
                    alt={premium.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">{premium.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ServicesList;
