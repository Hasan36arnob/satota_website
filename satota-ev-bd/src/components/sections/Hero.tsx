import { motion } from 'framer-motion';
import { ArrowRight, Zap, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/dc-charger.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="EV Charging Station in Bangladesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/5 dark:from-background/10 dark:via-background/5 dark:to-background/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-background/30 dark:via-background/10" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Enhanced Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl animate-float" />

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full animate-bounce delay-300" />
      <div className="absolute top-32 right-32 w-6 h-6 border-2 border-accent/40 rounded-lg rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 left-16 w-3 h-3 bg-primary rounded-full animate-ping delay-700" />
      <div className="absolute top-40 right-20 w-8 h-8 border border-primary/30 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-accent rounded-full animate-bounce delay-1000" />

      {/* Electric Bolt Effects */}
      <div className="absolute top-1/3 right-1/3 text-primary/20 animate-pulse">
        <svg width="40" height="60" viewBox="0 0 24 36" fill="currentColor">
          <path d="M13.5 0L7.5 18H12v18l6-18h-4.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-accent/20 animate-pulse delay-1500">
        <svg width="30" height="45" viewBox="0 0 24 36" fill="currentColor">
          <path d="M13.5 0L7.5 18H12v18l6-18h-4.5z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="container-padding max-w-7xl mx-auto relative z-10 py-20">
        <div className="max-w-3xl relative ml-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-foreground">Bangladesh's #1 EV Charging Network</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Powering </span>
            <span className="text-gradient">Bangladesh's</span>
            <br />
            <span className="text-white">Electric Future</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-10 max-w-xl"
          >
            Satota Electrical Vehicle Solution is your trusted partner for reliable EV charging stations across Bangladesh. Fast, safe, and accessible charging for everyone.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Find Charging Station
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground"></span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
