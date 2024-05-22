import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'service_ybitqdt';
    const templateId = 'template_sumo1uv';
    const apiKey = 'PDZNdetiKG8dO9du8';

    emailjs.init(apiKey);

    emailjs.send(serviceId, templateId, formData)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email.', error);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer">
        
      </div>
    </section>
  );
};

export default Contact;
