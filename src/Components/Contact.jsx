import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-gray-900 text-white flex flex-col items-center justify-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      {/* Contact Form Card */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg space-y-6">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 px-6 py-2 rounded-md text-white font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6 text-white/70">
          <a href="mailto:sadia@example.com" target="_blank" rel="noopener noreferrer">
            <Mail className="hover:text-pink-400 transition" />
          </a>
          <a href="https://linkedin.com/in/sadia-naaz-134458225" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
