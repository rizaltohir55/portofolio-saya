import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactPage.css'; // Kita akan buat file CSS ini

function ContactForm() {
  // Ganti 'YOUR_FORM_ID' dengan ID unik dari Formspree Anda
  const [state, handleSubmit] = useForm("xwpqwojy");

  if (state.succeeded) {
      return <p className="success-message">Terima kasih! Pesan Anda telah terkirim.</p>;
  }

  return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">
            Alamat Email Anda
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">
            Pesan Anda
          </label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Kirim Pesan
        </button>
      </form>
  );
}

function ContactPage() {
  return (
    <div className="contact-container">
        <h2>Hubungi Saya</h2>
        <p>Silakan isi formulir di bawah ini untuk mengirim saya pesan. Saya akan segera membalasnya.</p>
        <ContactForm />
    </div>
  )
}

export default ContactPage;
