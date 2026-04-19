import { useRef } from 'react';
import emailjs from "emailjs-com";
import { Send, ChevronDown } from 'lucide-react';

const inputClass = "w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all";
const selectClass = "w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all appearance-none cursor-pointer";
const labelClass = "text-sm font-medium text-white/90 ml-1 mb-2 block";

function BookNow({ mode = "enquiry" }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const templateId = mode === "partner" ? "template_partner_id" : "template_y8hbim7"; // 👈 Replace template_partner_id with your EmailJS partner template ID
    emailjs.sendForm('service_bws8id2', templateId, form.current, 'cnTwa_OQWQuy2jYeQ')
      .then(() => {
        alert(mode === "partner" ? "Application sent successfully!" : "Enquiry sent successfully!");
        e.target.reset();
      }, (error) => {
        console.log(error);
        alert('Failed to send. Please try again.');
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form ref={form} onSubmit={sendEmail} className="bg-[#111]/40 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 md:p-10 shadow-2xl w-full space-y-6">

        {mode === "partner" ? (
          <>
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name *</label>
              <input name="name" className={inputClass} type="text" placeholder="Enter your full name" required />
            </div>

            {/* Age */}
            <div>
              <label className={labelClass}>Age *</label>
              <input name="age" className={inputClass} type="number" min="18" max="60" placeholder="Enter your age" required />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number *</label>
              <input name="phoneNumber" className={inputClass} type="tel" placeholder="Enter your phone number" required />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email ID *</label>
              <input name="email" className={inputClass} type="email" placeholder="Enter your email address" required />
            </div>

            {/* Shoot Device */}
            <div>
              <label className={labelClass}>Primary Shoot Device *</label>
              <div className="relative">
                <select name="shootDevice" className={selectClass} required defaultValue="">
                  <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select your device</option>
                  <option className="bg-[#1a1a1a]">iPhone 13</option>
                  <option className="bg-[#1a1a1a]">iPhone 14</option>
                  <option className="bg-[#1a1a1a]">iPhone 15</option>
                  <option className="bg-[#1a1a1a]">iPhone 15 Pro / Pro Max</option>
                  <option className="bg-[#1a1a1a]">iPhone 16</option>
                  <option className="bg-[#1a1a1a]">iPhone 16 Pro / Pro Max</option>
                  <option className="bg-[#1a1a1a]">Samsung Galaxy S Series</option>
                  <option className="bg-[#1a1a1a]">Samsung Galaxy Ultra Series</option>
                  <option className="bg-[#1a1a1a]">Google Pixel</option>
                  <option className="bg-[#1a1a1a]">Other Android</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className={labelClass}>Experience *</label>
              <div className="relative">
                <select name="experience" className={selectClass} required defaultValue="">
                  <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select experience level</option>
                  <option className="bg-[#1a1a1a]">Beginner (Less than 1 year)</option>
                  <option className="bg-[#1a1a1a]">Intermediate (1–3 years)</option>
                  <option className="bg-[#1a1a1a]">Experienced (3–5 years)</option>
                  <option className="bg-[#1a1a1a]">Expert (5+ years)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Portfolio Link */}
            <div>
              <label className={labelClass}>Portfolio Link *</label>
              <input name="portfolio" className={inputClass} type="url" placeholder="https://your-portfolio.com" required />
            </div>
          </>
        ) : (
          <>
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name *</label>
              <input name="name" className={inputClass} type="text" placeholder="Enter full name" required />
            </div>

            {/* Contact Number */}
            <div>
              <label className={labelClass}>Contact Number *</label>
              <input name="phoneNumber" className={inputClass} type="tel" placeholder="Enter contact number" required />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email Address *</label>
              <input name="email" className={inputClass} type="email" placeholder="Enter email address" required />
            </div>

            {/* Occasion */}
            <div>
              <label className={labelClass}>Occasion *</label>
              <div className="relative">
                <select name="occasion" className={selectClass} required defaultValue="">
                  <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select occasion</option>
                  <option className="bg-[#1a1a1a]">Birthday</option>
                  <option className="bg-[#1a1a1a]">Anniversary</option>
                  <option className="bg-[#1a1a1a]">Wedding</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* City */}
            <div>
              <label className={labelClass}>City *</label>
              <div className="relative">
                <select name="location" className={selectClass} required defaultValue="">
                  <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select city</option>
                  <option className="bg-[#1a1a1a]">Kurnool</option>
                  <option className="bg-[#1a1a1a]">Nandyala</option>
                  <option className="bg-[#1a1a1a]">Hyderabad</option>
                  <option className="bg-[#1a1a1a]">Banglore</option>
                  <option className="bg-[#1a1a1a]">Vijayawada</option>
                  <option className="bg-[#1a1a1a]">Vizag</option>
                  <option className="bg-[#1a1a1a]">US</option>
                  <option className="bg-[#1a1a1a]">Dubai</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className={labelClass}>Date of the Occasion *</label>
              <input name="date" className={inputClass} type="date" required style={{ colorScheme: 'dark' }} />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B4941F] hover:from-[#E5C07B] hover:to-[#D4AF37] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-2"
        >
          {mode === "partner" ? "Submit Application" : "Submit Enquiry"}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default BookNow;