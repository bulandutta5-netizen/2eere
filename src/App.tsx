/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle, Send, Scissors, Sparkles, Heart, Flower2 } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/916361874828";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-beige-100 font-sans text-gray-900 selection:bg-gold-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <h1 className={`font-serif text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}>
                Josh <span className="text-gold-500">Beauty World</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-xs lg:text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold-500 ${isScrolled || mobileMenuOpen ? 'text-gray-700' : 'text-white/90'}`}
                >
                  {item}
                </button>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
                {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-gray-800 hover:text-gold-500 hover:bg-beige-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-md"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="block text-gold-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">Exclusive Women Salon</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Experience <br/>
              <span className="text-gold-500 italic">Luxury</span> & Elegance
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-lg font-light">
              Step into a world of premium beauty treatments tailored exclusively for you. Discover your true radiance at Josh Beauty World.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-center font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book Appointment
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-center font-medium transition-all"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
                  alt="Salon Treatment" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white z-20 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop" 
                  alt="Beauty Products" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-gold-100 rounded-full -z-10 blur-2xl opacity-60"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold-500"></div>
                <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Redefining Beauty <br/>With <span className="italic text-gold-500">Premium Care</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed font-light">
                At Josh Beauty World, we believe that every woman deserves to feel confident, beautiful, and pampered. Our exclusive women's salon offers a sanctuary of relaxation where premium services meet unparalleled expertise.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                From transformative hair styling to rejuvenating skin therapies and flawless bridal makeovers, our dedicated team of professionals is committed to delivering an exceptional experience tailored to your unique beauty needs.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-serif text-gold-500 mb-2">10+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-gold-500 mb-2">5k+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Happy Clients</p>
                </div>
              </div>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Discover More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-beige-100 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold-500"></div>
              <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">Our Offerings</span>
              <div className="h-[1px] w-8 bg-gold-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Signature <span className="italic text-gold-500">Services</span></h2>
            <p className="text-gray-600 text-lg font-light">Indulge in our comprehensive range of luxury beauty treatments designed to enhance your natural grace.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Hair Care', icon: <Scissors className="w-8 h-8" />, desc: 'Precision cuts, premium coloring, and nourishing spa treatments for luscious locks.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop' },
              { title: 'Skin Care', icon: <Sparkles className="w-8 h-8" />, desc: 'Rejuvenating facials and advanced skin therapies for a flawless, glowing complexion.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop' },
              { title: 'Bridal Makeup', icon: <Heart className="w-8 h-8" />, desc: 'Exquisite bridal makeovers ensuring you look breathtaking on your special day.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop' },
              { title: 'Spa & Relaxation', icon: <Flower2 className="w-8 h-8" />, desc: 'Holistic body massages and spa rituals to melt away stress and restore balance.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop' }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gold-500 z-20 shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-3 group-hover:text-gold-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gold-500 transition-colors uppercase tracking-wider"
                  >
                    Book Now <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Client <span className="italic text-gold-500">Love</span></h2>
            <p className="text-gray-600 text-lg font-light">Read what our beautiful clients have to say about their experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', text: 'Absolutely loved my bridal makeup! The team was so professional and made me feel like a queen on my big day. Highly recommend their services.', rating: 5 },
              { name: 'Anjali Desai', text: 'The spa treatment was incredibly relaxing. The ambiance is pure luxury, and the staff is very attentive. My skin has never felt better.', rating: 5 },
              { name: 'Meera Reddy', text: 'Best hair coloring experience I\'ve ever had. They listened exactly to what I wanted and delivered beyond my expectations. A truly premium salon.', rating: 4 }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-beige-100 p-8 rounded-2xl relative"
              >
                <div className="text-gold-500/20 absolute top-6 right-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596C16.634 13.923 16.746 13.218 16.746 12.5V3H24V12.5C24 16.642 20.642 20 16.5 20H14.017V21ZM0 21L2.393 14.596C2.617 13.923 2.729 13.218 2.729 12.5V3H10V12.5C10 16.642 6.642 20 2.5 20H0V21Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-gold-500 text-gold-500' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-700 font-light italic mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center text-gold-600 font-serif font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full filter blur-[100px]"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-gold-500 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="max-w-xl mx-auto lg:max-w-none lg:mx-0 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold-500"></div>
                <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Our <span className="italic text-gold-500">Sanctuary</span></h2>
              <p className="text-gray-400 font-light mb-12 text-lg max-w-md">
                We'd love to hear from you. Book an appointment or reach out with any questions about our services.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 text-gold-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Location</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      1322, 1st Floor, 50 Feet Main Rd,<br/>
                      opp. to Water Tank, Kumaraswamy Layout,<br/>
                      Bengaluru, Karnataka 560111
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 text-gold-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Phone</h4>
                    <a href="tel:+916361874828" className="text-gray-400 font-light hover:text-gold-500 transition-colors">
                      +91 6361874828
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 text-gold-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Email</h4>
                    <a href="mailto:info@joshbeautyworld.com" className="text-gray-400 font-light hover:text-gold-500 transition-colors">
                      info@joshbeautyworld.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl text-gray-900 max-w-xl mx-auto lg:max-w-none w-full"
            >
              <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, '_blank'); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              Josh <span className="text-gold-500">Beauty World</span>
            </h2>
            <p className="text-sm font-light">Exclusive Women Salon</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
          
          <div className="text-sm font-light text-center md:text-right">
            &copy; {new Date().getFullYear()} Josh Beauty World.<br className="md:hidden"/> All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Welcome to Josh Beauty World! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you! Have a great day!", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: '400px' }}
          >
            {/* Header */}
            <div className="bg-gold-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Josh Beauty World</h4>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.isBot ? 'bg-white border border-gray-100 text-gray-800 self-start rounded-tl-sm' : 'bg-gold-500 text-white self-end rounded-tr-sm'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold-500"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors flex-shrink-0"
              >
                <Send size={16} className="ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-gold-600 hover:scale-105 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
