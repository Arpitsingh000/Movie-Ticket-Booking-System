import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // In a real app, this would send the form data to a server
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below or reach out to us using the contact information.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          {formSubmitted ? (
            <div className="form-success">
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              <button onClick={() => setFormSubmitted(false)} className="send-another-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={formErrors.subject ? 'error' : ''}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>123 Cinema Street</p>
            <p>Movie City, MC 12345</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone Number</h3>
            <p>+1 (123) 456-7890</p>
            <p>+1 (987) 654-3210</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Address</h3>
            <p>info@movietix.com</p>
            <p>support@movietix.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🕒</div>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us On The Map</h2>
        <div className="map-placeholder">
          {/* In a real app, this would be replaced with an actual map component */}
          <div className="map-image">
            <img src="https://via.placeholder.com/1200x400?text=Google+Map+Location" alt="Map Location" />
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I book a movie ticket?</h3>
            <p>You can book a movie ticket by browsing our movies section, selecting your preferred movie, choosing a date and time, selecting seats, and completing the payment process.</p>
          </div>

          <div className="faq-item">
            <h3>Can I cancel my booking?</h3>
            <p>Yes, you can cancel your booking up to 4 hours before the show time. Please note that a cancellation fee may apply.</p>
          </div>

          <div className="faq-item">
            <h3>How do I get my tickets?</h3>
            <p>Once your booking is confirmed, you will receive an email with your e-ticket. You can either print it or show the QR code on your phone at the theater.</p>
          </div>

          <div className="faq-item">
            <h3>Are there any discounts available?</h3>
            <p>Yes, we offer various discounts including early bird offers, weekday specials, and loyalty program benefits. Check our promotions section for current offers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;