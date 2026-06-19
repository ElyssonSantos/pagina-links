import { motion } from 'framer-motion';
import {
  MessageCircle,
  Camera,
  MapPin,
  CalendarHeart,
  Clock,
  ArrowLeft
} from 'lucide-react';

const links = [
  { id: 1, title: 'SITE OFICIAL', subtitle: 'Conheça nosso estúdio e portfólio', icon: MapPin, url: '#' },
  { id: 2, title: 'AVALIAR NO GOOGLE', subtitle: 'Sua opinião faz a diferença', icon: CalendarHeart, url: '#' },
  { id: 3, title: 'ENTRAR EM CONTATO', subtitle: 'Agende seu horário pelo WhatsApp', icon: MessageCircle, url: '#' },
  { id: 4, title: 'OFERTAS EXCLUSIVAS', subtitle: 'Participe do nosso grupo VIP', icon: Clock, url: '#' },
  { id: 5, title: 'LOCALIZAÇÃO DO ESTÚDIO', subtitle: 'Venha nos visitar', icon: MapPin, url: '#' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-base flex justify-center selection:bg-highlight selection:text-white relative overflow-x-hidden">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-details via-base to-base opacity-80"></div>

      <div className="w-full max-w-[480px] px-6 py-12 relative z-10 flex flex-col items-center min-h-screen">
        
        {/* Profile / Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center mb-10 mt-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 rounded-full border-[3px] border-primary p-1 mb-5 shadow-[0_0_30px_rgba(229,140,184,0.15)] bg-secondary"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img src="/hero_main_elegant.png" alt="Logo Nail Design" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <h1 className="text-[2rem] font-serif font-semibold text-center uppercase tracking-widest text-text-main mb-1">
            Studio <span className="text-highlight">TESTE</span>
          </h1>
          <p className="text-highlight2 font-light text-[15px] text-center mb-5 opacity-90 tracking-wide">
            Nail Design & Alongamentos Premium
          </p>

          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-highlight bg-highlight/10 px-4 py-1.5 rounded-full border border-highlight/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
            </span>
            AGENDA ABERTA
          </div>
        </motion.div>

        {/* Links Container */}
        <motion.div 
          className="w-full flex flex-col gap-4 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(229,140,184,0.08)", borderColor: "rgba(229,140,184,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center p-4 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-secondary transition-all duration-300 shadow-lg shadow-black/20"
              >
                {/* Icon Left */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4 bg-primary text-base group-hover:shadow-[0_0_15px_rgba(229,140,184,0.4)] transition-shadow duration-300">
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                
                {/* Text */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[15px] font-bold text-text-main uppercase tracking-wide group-hover:text-highlight transition-colors font-sans">
                    {link.title}
                  </h3>
                  <p className="text-[13px] text-text-muted font-light mt-0.5 tracking-wide">
                    {link.subtitle}
                  </p>
                </div>
                
                {/* Arrow Right */}
                <div className="text-secondary group-hover:text-highlight transition-colors flex shrink-0">
                  <ArrowLeft size={24} strokeWidth={1.5} className="rotate-[135deg]" />
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer / Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-auto flex flex-col items-center gap-6 w-full pb-6"
        >
          <div className="flex gap-5">
            <a href="#" className="w-12 h-12 rounded-full bg-secondary/60 border border-secondary flex items-center justify-center text-highlight2 hover:bg-highlight hover:text-base hover:border-highlight transition-all duration-300 hover:-translate-y-1">
              <Camera size={20} strokeWidth={2} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-secondary/60 border border-secondary flex items-center justify-center text-highlight2 hover:bg-highlight hover:text-base hover:border-highlight transition-all duration-300 hover:-translate-y-1">
              <MessageCircle size={20} strokeWidth={2} />
            </a>
          </div>
          
          <div className="text-center">
             <p className="text-xs text-text-muted font-light tracking-widest uppercase">&copy; 2026 Studio TESTE.</p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
