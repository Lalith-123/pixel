import React, { useRef } from 'react';
import emailjs from "emailjs-com";

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
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <form ref={form} onSubmit={sendEmail} className="bg-[#52472d] p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div>
          <label className="block text-white mb-1 font-semibold">Full Name *</label>
          <input
            name="name"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white placeholder-gray-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            placeholder="Enter full name"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1 font-semibold">Contact Number *</label>
          <input
            name="phoneNumber"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white placeholder-gray-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="tel"
            placeholder="Enter contact number"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1 font-semibold">Email Address *</label>
          <input
            name="email"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white placeholder-gray-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="email"
            placeholder="Enter email address"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-1 font-semibold">Occasion *</label>
          <select
            name="occasion"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            defaultValue=""
          >
            <option value="" disabled>Select occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 font-semibold">City *</label>
          <select
            name="location"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            defaultValue=""
          >
            <option value="" disabled>Select city</option>
            <option>Kurnool</option>
            <option>Nandyala</option>
            <option>Hyderabad</option>
            <option>Banglore</option>
            <option>Vijayawada</option>
            <option>Vizag</option>
            <option>US</option>
            <option>Dubai</option>
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 font-semibold">Date of the occasion *</label>
          <input
            name="date"
            className="w-full px-3 py-2 rounded-md bg-yellow-900 text-white placeholder-gray-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="date"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 rounded-md bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold text-lg hover:from-yellow-700 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}

export default BookNow;
