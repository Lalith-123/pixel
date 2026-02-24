import { useRef } from 'react';
import emailjs from "emailjs-com";
import { Send, ChevronDown } from 'lucide-react';

function BookNow() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bws8id2', 'template_y8hbim7', form.current, 'cnTwa_OQWQuy2jYeQ')
      .then(() => {
        alert('Enquiry sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error)
        alert('Failed to send enquiry. Please try again.', error);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form ref={form} onSubmit={sendEmail} className="bg-[#111]/40 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 md:p-10 shadow-2xl w-full space-y-6">
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">Full Name *</label>
          <input
            name="name"
            className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all"
            type="text"
            placeholder="Enter full name"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">Contact Number *</label>
          <input
            name="phoneNumber"
            className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all"
            type="tel"
            placeholder="Enter contact number"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">Email Address *</label>
          <input
            name="email"
            className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all"
            type="email"
            placeholder="Enter email address"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">Occasion *</label>
          <div className="relative">
            <select
              name="occasion"
              className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all appearance-none cursor-pointer"
              required
              defaultValue=""
            >
              <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select occasion</option>
              <option className="bg-[#1a1a1a]">Birthday</option>
              <option className="bg-[#1a1a1a]">Anniversary</option>
              <option className="bg-[#1a1a1a]">Wedding</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">City *</label>
          <div className="relative">
            <select
              name="location"
              className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all appearance-none cursor-pointer"
              required
              defaultValue=""
            >
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
        <div>
          <label className="text-sm font-medium text-white/90 ml-1 mb-2 block">Date of the occasion *</label>
          <input
            name="date"
            className="w-full bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all [color-scheme:dark]"
            type="date"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B4941F] hover:from-[#E5C07B] hover:to-[#D4AF37] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-2"
        >
          Submit Enquiry
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default BookNow;
