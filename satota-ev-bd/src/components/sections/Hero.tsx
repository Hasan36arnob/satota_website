import { motion } from 'framer-motion';
import { ArrowRight, Zap, MapPin, Shield, Battery, Clock, Star } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-black/70 to-green-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-green-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-green-800/20 via-transparent to-black/50" />
      </div>

      {/* Minimal Professional Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/5 rounded-lg rotate-45"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/5 rounded-full"></div>

      {/* Content */}
      <div className="container-padding max-w-7xl mx-auto relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] mb-8 text-center text-white drop-shadow-2xl"
            >
              Bangladesh's EV Revolution
              <span className="block text-green-400 font-black text-5xl md:text-6xl lg:text-8xl mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>

            {/* Vision Statement */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/95 drop-shadow-xl text-center max-w-3xl mx-auto font-medium leading-relaxed mb-12"
            >
              Building Bangladesh's most effective EV charging network — urban hubs to highway fast-chargers, making clean energy accessible for every driver.
            </motion.p>

            {/* Environmental Effectiveness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8"
            >
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-black text-green-400 mb-2">Clean</div>
                <div className="text-white/90 font-semibold mb-1">Energy Focus</div>
                <div className="text-sm text-white/70">Reducing carbon footprint</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-black text-green-400 mb-2">Smart</div>
                <div className="text-white/90 font-semibold mb-1">Infrastructure</div>
                <div className="text-sm text-white/70">Efficient charging solutions</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-black text-green-400 mb-2">Lasting</div>
                <div className="text-white/90 font-semibold mb-1">Impact</div>
                <div className="text-sm text-white/70">Sustainable transportation</div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-lg text-white/80 font-medium mb-6">
                Join us in building Bangladesh's sustainable transportation future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
                >
                  Learn Our Vision
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  Partner With Us
                </motion.button>
              </div>
            </motion.div>
          </div>
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
