import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Locations', href: '#locations' },
  { name: 'Our Policy', href: '#policy' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary/10 border-b border-border/50">
        <div className="container-padding max-w-7xl mx-auto flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:SATOTABD.ENG@GMAIL.COM" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} />
              SATOTABD.ENG@GMAIL.COM
            </a>
            <a href="tel:+8801777608011" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} />
              +8801777608011
            </a>
            <a href="https://wa.me/8801777608011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap size={14} className="text-primary" />
            <span>Bangladesh's Trusted EV Charging Partner</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-padding max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <Zap className="w-7 h-7 text-primary relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Satota</span>
              <span className="text-xs text-muted-foreground">EV Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-border/50 overflow-hidden"
            >
              <div className="container-padding py-6 flex flex-col gap-4">
                <div className="flex justify-center mb-4">
                  <ModeToggle />
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Contact Links for Mobile */}
                <div className="border-t border-border/50 pt-4 mt-4 space-y-3">
                  <a
                    href="tel:+8801777608011"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={18} />
                    <span>+8801777608011</span>
                  </a>
                  <a
                    href="https://wa.me/8801777608011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-green-500 transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:SATOTABD.ENG@GMAIL.COM"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={18} />
                    <span>SATOTABD.ENG@GMAIL.COM</span>
                  </a>
                </div>

                <Button variant="hero" size="lg" className="mt-6" asChild>
                  <a href="#contact" onClick={() => setIsOpen(false)}>Get Started</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
