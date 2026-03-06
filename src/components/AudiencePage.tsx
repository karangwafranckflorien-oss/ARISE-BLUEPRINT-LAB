import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Download, 
  MessageCircle, 
  FileText,
  CheckCircle2,
  Rocket
} from "lucide-react";
import { Logo } from "./Logo";
import { ContactSection } from "./ContactSection";
import { jsPDF } from "jspdf";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

interface AudiencePageProps {
  audiences: any[];
}

export function AudiencePage({ audiences }: AudiencePageProps) {
  const { id } = useParams<{ id: string }>();
  const audience = audiences.find(a => a.id === id);

  if (!audience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <h1 className="text-2xl font-bold mb-4">Audience not found</h1>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  const handleDownload = (title: string, content: string) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(30, 58, 138);
    doc.text("Arise Research Blueprint Lab", 20, 20);
    doc.setFontSize(16);
    doc.text(title, 20, 35);
    doc.setDrawColor(242, 125, 38);
    doc.setLineWidth(1);
    doc.line(20, 40, 190, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const splitText = doc.splitTextToSize(content, 170);
    doc.text(splitText, 20, 55);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("© Arise Research Blueprint Lab - For Academic and Professional Excellence", 20, 280);
    doc.save(`${title.toLowerCase().replace(/\s+/g, '_')}_blueprint.pdf`);
  };

  const Icon = audience.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dark-blue text-white py-12">
        <div className="w-full px-6 md:px-10">
          <div className="flex justify-between items-start mb-8">
            <Link to="/">
              <Logo className="h-10" light />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-blue-200 hover:text-white transition-colors font-medium">
                Contact Us
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-accent-orange text-dark-blue rounded-2xl flex items-center justify-center shadow-xl">
              <Icon size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">{audience.label} Resources</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Tailored AI-powered blueprints and strategic tools designed specifically for {audience.label.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Services */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-display font-bold mb-8 text-neutral-900 border-b-4 border-accent-orange inline-block">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {audience.content.map((item: any, idx: number) => {
                    const ServiceIcon = item.icon;
                    return (
                      <div key={idx} className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-white text-dark-blue rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-dark-blue group-hover:text-white transition-colors">
                          <ServiceIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-900">{item.title}</h3>
                        <p className="text-neutral-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold mb-8 text-neutral-900 border-b-4 border-accent-orange inline-block">Pricing Plans</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {audience.plans.map((plan: any, idx: number) => (
                    <div key={idx} className={`p-6 rounded-2xl border ${plan.popular ? "border-accent-orange bg-blue-50/30 shadow-md" : "border-neutral-200 bg-white"} flex flex-col`}>
                      <h3 className="text-xl font-bold mb-1 text-dark-blue">{plan.name}</h3>
                      <div className="text-2xl font-bold mb-4 text-dark-blue">
                        {plan.price}
                      </div>
                      {plan.tagline && (
                        <p className="text-xs text-neutral-500 mb-4 leading-relaxed italic">{plan.tagline}</p>
                      )}
                      <ul className="space-y-2 mb-6 flex-grow">
                        {plan.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle2 size={14} className="text-accent-orange shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <motion.a 
                        href={WHATSAPP_LINK} 
                        target="_blank" 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`btn btn-sm ${plan.popular ? "btn-secondary" : "btn-outline"} w-full text-xs`}
                      >
                        Inquire Now
                      </motion.a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enterprise Exclusive Section (Conditional) */}
              {['hr', 'ceos', 'agriculture', 'ngos'].includes(audience.id) && (
                <section className="mb-12">
                  <div className="bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-800 flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-accent-orange p-8 flex flex-col justify-center items-center text-center text-dark-blue">
                      <Rocket size={48} className="mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tighter leading-tight">Enterprise Exclusive</h3>
                    </div>
                    <div className="md:w-3/4 p-10 text-white">
                      <h2 className="text-2xl font-display font-bold mb-3 text-accent-orange">The "While You Sleep" Automation Pipeline</h2>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-6">Best For: HR Directors, Headmasters, and Corporate Agencies</p>
                      
                      <p className="text-lg font-medium text-neutral-200 italic mb-4">
                        "We build the machine. You just read the results."
                      </p>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                        We don't just teach you how to use AI; we build a custom, secure data pipeline for your company. Imagine a workflow where every applicant's CV is automatically collected, filtered against your exact criteria, and summarized. You wake up on Monday morning, and a clean "Top 5 Candidates" report is already waiting on your desk.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-center sm:text-left flex-grow">
                          <p className="text-accent-orange font-bold mb-1">📲 Interested in a custom automation build?</p>
                          <p className="text-[10px] text-neutral-500">Schedule a feasibility call with our experts today.</p>
                        </div>
                        <motion.a 
                          href={WHATSAPP_LINK} 
                          target="_blank" 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-secondary btn-sm whitespace-nowrap gap-2"
                        >
                          <MessageCircle size={18} />
                          Text Us via WhatsApp
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: CTA & Info */}
            <div className="space-y-8">
              <div className="bg-dark-blue text-white p-8 rounded-3xl shadow-2xl border-t-8 border-t-accent-orange">
                <h3 className="text-2xl font-bold mb-4">Get the Full Package</h3>
                <p className="text-blue-100 mb-6">
                  Unlock our complete library of 50+ premium prompts and templates specifically for {audience.label.toLowerCase()}.
                </p>
                <ul className="space-y-3 mb-8">
                  {(audience.plans[1]?.features || ["Premium Prompt Bank", "Strategic Templates", "Implementation Guides"]).map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent-orange" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-secondary w-full py-4 text-lg gap-3 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Inquire on WhatsApp
                </motion.a>
              </div>

              <div className="p-8 rounded-3xl border border-neutral-200 bg-neutral-50">
                <h4 className="font-bold text-neutral-900 mb-4">Why Arise Blueprints?</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Our blueprints are not just templates; they are strategic frameworks built on the RGCC model to ensure academic and professional excellence in the age of AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800">
        <div className="container text-center">
          <Logo className="h-10 mb-6 mx-auto" light />
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Arise Research Blueprint Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
