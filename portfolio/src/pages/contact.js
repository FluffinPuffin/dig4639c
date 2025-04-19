import React from 'react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <p>Or reach me directly at: ch011941@ucf.edu.com</p>

      <div className="contact-links-container">
        <a href="https://www.linkedin.com/in/chloe-becker-a60b7a253/" target="_blank" rel="noreferrer" className="contactLinks">LinkedIn</a>
        <a href="https://www.github.com/FluffinPuffin" target="_blank" rel="noreferrer" className="contactLinks">GitHub</a>
        <a href="https://www.x.com/CloysterBecker" target="_blank" rel="noreferrer" className="contactLinks">Twitter</a>
        <a href="https://www.instagram.com/fluffinpuffin04/" target="_blank" rel="noreferrer" className="contactLinks">Instagram</a>
      </div>
    </div>
  );
}

export default Contact;