import React from 'react';
import { motion } from "motion/react";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  CreditCard, 
  ArrowLeft,
  Phone,
  Clock,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const OFFICE_PHONE = "+250 795 590 127";

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-dark-blue text-white py-8">
        <div className="w-full px-6 md:px-10 flex justify-between items-center">
          <Link to="/">
            <Logo className="h-10" light />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200">
          <div className="container text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold text-dark-blue mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Have questions about our AI blueprints or training programs? We're here to help you navigate the future of work.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Direct Contact */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-dark-blue rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                <p className="text-neutral-500 mb-6">Need support or consultant for immediate assistance. reach out</p>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-accent-orange text-sm font-bold">KAYITESI Annet</span>
                    <span className="text-lg font-semibold">+250 798 600 238</span>
                  </div>
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-dark-blue font-bold hover:text-accent-orange transition-colors"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </motion.div>

              {/* Office & Support */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-dark-blue rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Office & Support</h3>
                <p className="text-neutral-500 mb-6">General inquiries, corporate partnerships, and technical support.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent-orange" />
                    <span className="font-semibold">{OFFICE_PHONE}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-accent-orange" />
                    <span className="text-sm text-neutral-600">Mon - Fri: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </motion.div>

              {/* Location & Payments */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-dark-blue rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit & Payments</h3>
                <p className="text-neutral-500 mb-6">Our headquarters in Kigali and secure payment options.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent-orange mt-1" />
                    <span className="font-semibold">Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard size={18} className="text-accent-orange" />
                    <span className="font-semibold">MoMo Code: 002680</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-accent-orange" />
                    <a href="https://www.ariseaiagency.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent-orange transition-colors">www.ariseaiagency.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder / CTA */}
        <section className="py-20 bg-dark-blue text-white overflow-hidden relative">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Ready to start your AI journey?</h2>
              <p className="text-xl text-blue-100 mb-12">Our team is ready to provide you with the blueprints and training you need to excel in the digital age.</p>
              <div className="flex justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary py-4 px-12 text-lg gap-3">
                  <MessageCircle size={24} />
                  Message Us Now
                </a>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-10 border-t border-neutral-800">
        <div className="container text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Arise Digital Solutions Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
