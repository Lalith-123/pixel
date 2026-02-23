import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import BookNow from './BookNow';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-yellow-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Have questions? We're here to help you create amazing content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111]/40 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-10 relative z-10">
              {/* Location */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#D4AF37]/20 shadow-inner group-hover:border-[#D4AF37]/40 transition-colors">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Our Location</h3>
                  <p className="text-white/60 leading-relaxed">
                    Dr.Ganesh Residency, 202<br />
                    Banjara Hills, Hyderabad<br />
                    Telangana 500073, India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#D4AF37]/20 shadow-inner group-hover:border-[#D4AF37]/40 transition-colors">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Business Hours</h3>
                  <p className="text-white/60 leading-relaxed">
                    Monday - Sunday<br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#D4AF37]/20 shadow-inner group-hover:border-[#D4AF37]/40 transition-colors">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Phone</h3>
                  <p className="text-white/60 leading-relaxed hover:text-[#D4AF37] transition-colors cursor-pointer">
                    +916305306829
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#D4AF37]/20 shadow-inner group-hover:border-[#D4AF37]/40 transition-colors">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Email</h3>
                  <p className="text-white/60 leading-relaxed hover:text-[#D4AF37] transition-colors cursor-pointer">
                    support@flashoot.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BookNow />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.867272213759!2d78.4477813751656!3d17.41814498347424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9737107779d9%3A0x63343464336067b5!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1708586400000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Map Overlay Gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </div>
  );
}
