// src/pages/ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import AnimatedText from '../components/AnimatedText';

function ContactPage() {
  usePageTitle('Kontak | Rizal Tohir');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xwpqwojy', { // Ganti dengan kode Formspree Anda
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData )
      });
      if (response.ok) {
        setFormStatus({ submitted: true, success: true, message: 'Terima kasih! Pesan Anda telah terkirim.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gagal mengirim pesan.');
      }
    } catch (error) {
      setFormStatus({ submitted: true, success: false, message: 'Oops! Terjadi kesalahan. Silakan coba lagi.' });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedText text="Let's Connect." el="h1" className="contact-title" viewport={{ once: true }} />
      <p className="contact-subtitle">Punya pertanyaan, proposal, atau hanya ingin menyapa? Isi formulir di bawah ini.</p>
      
      {formStatus.submitted && !formStatus.success && (
        <div className={`form-status-message error`}>{formStatus.message}</div>
      )}

      {formStatus.submitted && formStatus.success ? (
        <div className={`form-status-message success`}>{formStatus.message}</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder=" " value={formData.name} onChange={handleChange}/>
            <label htmlFor="name">Nama</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder=" " value={formData.email} onChange={handleChange}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="5" required placeholder=" " value={formData.message} onChange={handleChange}></textarea>
            <label htmlFor="message">Pesan</label>
          </div>
          <button type="submit" className="contact-button" disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
      )}
    </motion.div>
  );
}

export default ContactPage;