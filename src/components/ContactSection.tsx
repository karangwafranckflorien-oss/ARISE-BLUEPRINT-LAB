import { motion } from "motion/react";
import { MessageCircle, Mail, MapPin, CreditCard } from "lucide-react";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-dark-blue text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Work?</h2>
            <p className="text-xl text-blue-100 mb-10">Join hundreds of satisfied clients who have accelerated their success with our AI-powered resources.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent-orange">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-accent-orange text-sm font-bold mb-0.5">KAYITESI Annet</div>
                  <div className="text-blue-200 text-xs uppercase tracking-wider font-bold">WhatsApp</div>
                  <div className="text-xl font-semibold">+250 798 600 238</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent-orange">
                  <CreditCard size={24} />
                </div>
                <div>
                  <div className="text-blue-200 text-sm uppercase tracking-wider font-bold">MoMo Pay</div>
                  <div className="text-xl font-semibold">Code: 002680</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl text-neutral-900 shadow-2xl border-t-8 border-t-accent-orange">
            <h3 className="text-2xl font-bold mb-4 text-dark-blue">Get Started Today!</h3>
            <p className="text-neutral-600 mb-8">Contact us now and get instant access to premium resources tailored for your role.</p>
            <motion.a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary w-full py-4 text-lg gap-3 shadow-lg hover:shadow-accent-orange/40"
            >
              <MessageCircle size={24} />
              Message Us on WhatsApp
            </motion.a>
            <p className="text-center text-sm text-neutral-400 mt-6 italic">Typically responds within 15 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
