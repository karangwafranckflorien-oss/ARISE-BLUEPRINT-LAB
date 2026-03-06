import { motion, AnimatePresence } from "motion/react";
import { 
  Rocket, 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Menu,
  X,
  FileText,
  GraduationCap,
  Briefcase,
  Download,
  CreditCard,
  UserCheck,
  Layout,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactSection } from "./ContactSection";
import { Logo } from "./Logo";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

interface HomeProps {
  audiences: any[];
  faqs: any[];
}

export function Home({ audiences, faqs }: HomeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md h-16" : "bg-white h-20"} border-b border-neutral-200`}>
        <div className="w-full px-6 md:px-10 flex items-center justify-between h-full">
          <Link 
            to="/"
            className="cursor-pointer"
          >
            <Logo className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "#" },
              { name: "Who We Serve", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "#audience" },
              { name: "How It Works", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "#process" },
              { name: "Enterprise", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "#enterprise" },
              { name: "FAQ", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "#faq" },
              { name: "Contact Us", color: "hover:text-accent-orange", border: "bg-accent-orange", href: "/contact", isLink: true }
            ].map((item) => (
              <li key={item.name}>
                {item.isLink ? (
                  <Link 
                    to={item.href} 
                    className={`text-neutral-600 ${item.color} font-medium transition-all hover:scale-105 inline-block relative group`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${item.border} transition-all group-hover:w-full`}></span>
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className={`text-neutral-600 ${item.color} font-medium transition-all hover:scale-105 inline-block relative group`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${item.border} transition-all group-hover:w-full`}></span>
                  </a>
                )}
              </li>
            ))}
            <li>
              <motion.a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary px-5 py-2.5 rounded-lg text-sm transition-all"
              >
                Get Started
              </motion.a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-neutral-200 py-4"
            >
              <ul className="flex flex-col items-center gap-4">
                {[
                  { name: "Home", href: "#" },
                  { name: "Who We Serve", href: "#audience" },
                  { name: "How It Works", href: "#process" },
                  { name: "Enterprise", href: "#enterprise" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact Us", href: "/contact", isLink: true }
                ].map((item) => (
                  <li key={item.name}>
                    {item.isLink ? (
                      <Link 
                        to={item.href} 
                        className="text-neutral-600 font-medium hover:text-accent-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a 
                        href={item.href} 
                        className="text-neutral-600 font-medium hover:text-accent-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" className="btn btn-secondary w-full">
                    Get Started
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden bg-dark-blue text-white">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              AI-Powered Research Blueprints & Training <br />
              <span className="text-accent-orange italic">Tailored for You</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your research with our comprehensive, curriculum-aligned lesson plans, training programs, 
              and academic support services.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary gap-2 shadow-xl hover:shadow-accent-orange/40"
              >
                <MessageCircle size={20} />
                Connect With Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-24 bg-blue-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-neutral-900">Who We Serve</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">Choose your role to see tailored solutions designed specifically for your professional or academic needs.</p>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.id}
                  onClick={() => navigate(`/audience/${audience.id}`)}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:border-accent-orange transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-blue-50 text-dark-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-dark-blue group-hover:text-white transition-colors">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-dark-blue transition-colors">{audience.label}</h3>
                  <p className="text-xs text-neutral-500 mt-2">View Specialized Resources</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-neutral-900">How It Works</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">Follow these simple steps to get your specialized AI blueprints and start transforming your workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 -z-0"></div>
            
            {[
              { 
                step: "01", 
                title: "Select Your Role", 
                desc: "Choose from our 8 specialized categories to see resources tailored for you.",
                icon: UserCheck
              },
              { 
                step: "02", 
                title: "Choose a Plan", 
                desc: "Select the blueprint package that fits your needs (Quick Fix, Professional, or Enterprise).",
                icon: Layout
              },
              { 
                step: "03", 
                title: "Connect & Pay", 
                desc: "Message us on WhatsApp and complete payment via MoMo Code: 002680.",
                icon: CreditCard
              },
              { 
                step: "04", 
                title: "Instant Delivery", 
                desc: "Receive your AI-powered blueprints and access links immediately.",
                icon: Zap
              }
            ].map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white border-2 border-neutral-100 text-dark-blue rounded-2xl flex items-center justify-center mb-6 group-hover:border-accent-orange group-hover:bg-accent-orange group-hover:text-dark-blue transition-all duration-300 shadow-sm">
                    <StepIcon size={28} />
                  </div>
                  <div className="text-accent-orange font-display font-bold text-sm mb-2 tracking-widest uppercase">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Exclusive Section */}
      <section id="enterprise" className="py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-dark-blue p-12 flex flex-col justify-center items-center text-center text-white">
              <div className="w-20 h-20 bg-accent-orange text-dark-blue rounded-full flex items-center justify-center mb-6 shadow-xl">
                <Rocket size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Enterprise Exclusive</h3>
              <div className="h-1 w-12 bg-accent-orange rounded-full"></div>
            </div>
            <div className="md:w-2/3 p-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-dark-blue">The "While You Sleep" Automation Pipeline</h2>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mb-6">Best For: HR Directors, Headmasters, and Corporate Agencies</p>
              
              <div className="space-y-6 mb-10">
                <p className="text-xl font-medium text-neutral-800 italic leading-relaxed">
                  "We build the machine. You just read the results."
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We don't just teach you how to use AI; we build a custom, secure data pipeline for your company. Imagine a workflow where every applicant's CV is automatically collected, filtered against your exact criteria, and summarized. You wake up on Monday morning, and a clean "Top 5 Candidates" report is already waiting on your desk. We build the systems that work in the background 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-center sm:text-left flex-grow">
                  <p className="text-dark-blue font-bold mb-1">📲 Interested in a custom automation build?</p>
                  <p className="text-sm text-neutral-500">Schedule a feasibility call with our experts today.</p>
                </div>
                <motion.a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary whitespace-nowrap gap-2"
                >
                  <MessageCircle size={20} />
                  Text Us via WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-neutral-900">FAQ</h2>
            <p className="text-neutral-500">Everything you need to know about our services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-neutral-900">{faq.question}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-neutral-950 text-white pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <Link to="/">
                <Logo className="h-12 mb-6" light />
              </Link>
              <p className="text-neutral-400 mb-8">Mastering the Art of AI-Powered Excellence. Your ultimate destination for specialized research blueprints, strategic automation, and academic success.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-accent-orange hover:text-dark-blue transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-accent-orange hover:text-dark-blue transition-colors"><Twitter size={18} /></a>
                <a href="https://www.linkedin.com/company/arise-ai-agency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-accent-orange hover:text-dark-blue transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#audience" className="hover:text-white transition-colors text-sm">AI Research Blueprints</a></li>
                <li><a href="#enterprise" className="hover:text-white transition-colors text-sm">Academic Automation</a></li>
                <li><a href="#audience" className="hover:text-white transition-colors text-sm">Strategic Prompt Engineering</a></li>
                <li><a href="#process" className="hover:text-white transition-colors text-sm">Professional AI Training</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex flex-col gap-1">
                  <div className="text-accent-orange text-xs font-bold">KAYITESI Annet (Direct)</div>
                  <div className="flex items-center gap-3"><MessageCircle size={16} className="text-accent-orange" /> +250 798 600 238</div>
                </li>
                <li className="flex items-center gap-3"><MessageCircle size={16} className="text-accent-orange" /> +250 795 590 127 (Office)</li>
                <li className="flex items-center gap-3"><CreditCard size={16} className="text-accent-orange" /> MoMo Code: 002680</li>
                <li className="flex items-center gap-3"><MapPin size={16} /> Kigali, Rwanda</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Arise Digital Solutions Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
