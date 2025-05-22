import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_97y6t1m', // ✅ Replace with your actual service ID
      'template_ydhfhu9', // ✅ Replace with your actual template ID
      {
        title: 'New Contact Inquiry',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(), // optional placeholder in template
      },
      'X-EJrFSIYvKZVrU_l' // ✅ Replace with your public key from EmailJS account settings
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      setStatus('Failed to send message.');
    });
  };

  return (
    <section id='contact' className="min-h-screen px-6 py-20  text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg space-y-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 placeholder-white/60 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 px-6 py-2 rounded-md text-white font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="text-sm text-green-400 text-center mt-4">{status}</p>}

        <div className="mt-6 flex justify-center gap-6 text-white/70">
          <a href="mailto:sadia@example.com" target="_blank" rel="noopener noreferrer">
            <Mail className="hover:text-pink-400 transition" />
          </a>
          <a href="https://linkedin.com/in/sadia-naaz-134458225" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://github.com/sadia-naaz" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
