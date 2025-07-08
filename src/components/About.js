import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About MovieTix</h1>
        <p>Your premier destination for booking movie tickets online</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            MovieTix was founded in 2023 with a simple mission: to make movie ticket booking hassle-free and enjoyable. 
            We believe that the movie-going experience should start with the booking process itself.
          </p>
          <p>
            What began as a small startup has now grown into one of the most trusted movie ticket booking platforms, 
            serving thousands of movie enthusiasts every day. Our journey has been exciting, and we continue to 
            innovate and improve our services to provide the best experience for our users.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At MovieTix, our mission is to revolutionize the way people book movie tickets. We aim to provide a 
            seamless, user-friendly platform that makes it easy for movie lovers to discover, select, and book 
            tickets for their favorite movies.
          </p>
          <p>
            We are committed to enhancing the movie-going experience by offering convenient booking options, 
            exclusive deals, and personalized recommendations based on user preferences.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎫</div>
              <h3>Easy Booking</h3>
              <p>Book your tickets in just a few clicks with our intuitive interface.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🍿</div>
              <h3>Latest Movies</h3>
              <p>Access to the latest movies across all genres.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing and regular discounts for movie tickets.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎭</div>
              <h3>Multiple Theaters</h3>
              <p>Partnership with the best theaters in your city.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Book tickets on the go with our responsive design.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>Safe and secure payment options for worry-free transactions.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Behind MovieTix is a team of passionate movie lovers, tech enthusiasts, and customer service experts 
            who work tirelessly to provide you with the best movie ticket booking experience. Our diverse team brings 
            together a wealth of knowledge and experience from various fields, united by a common love for cinema.
          </p>
          <p>
            We are constantly learning, growing, and adapting to new technologies and trends to ensure that MovieTix 
            remains at the forefront of the online ticket booking industry.
          </p>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"MovieTix has completely changed how I book movie tickets. It's so easy to use and the interface is very intuitive. I love the seat selection feature!"</p>
            </div>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"I've been using MovieTix for the past few months and I'm impressed with their service. The booking process is smooth and they have great offers too!"</p>
            </div>
            <div className="testimonial-author">- Michael Brown</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"As a movie enthusiast, I find MovieTix to be the perfect platform for booking tickets. They have all the latest movies and the best theaters in town."</p>
            </div>
            <div className="testimonial-author">- Emily Davis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;