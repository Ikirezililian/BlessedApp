import React from "react";
import '../styles/Home.css'; // Correct path to the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to Blessed Church</h1>
        <h2>A Place to Worship, Connect, and Grow Together</h2>
        <p>Join us in discovering faith, forming lifelong connections, and serving the greater good.</p>
      </header>

      {/* Introductory Section */}
      <section className="home-intro">
        <div className="home-intro-text">
          <h2>About Us</h2>
          <p>
            Blessed Church is a vibrant community where everyone is welcome. We
            believe in building a foundation of faith, compassion, and
            togetherness. Whether you’re exploring faith or looking for a place
            to belong, Blessed Church is here for you.
          </p>
        </div>
        <div className="home-intro-image">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Community Gathering"
            className="placeholder-image"
          />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="home-highlights">
        <h2>Highlights</h2>
        <ul>
          <li>
            <strong>Inspiring Weekly Services:</strong> Join us every Sunday at
            10 AM for worship, fellowship, and the Word of God.
          </li>
          <li>
            <strong>Community Outreach Programs:</strong> Be part of our
            mission to bring hope and love to those in need.
          </li>
          <li>
            <strong>Engaging Events:</strong> Stay connected through Bible
            studies, youth programs, and volunteer opportunities.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta">
        <h2>Get Involved</h2>
        <div className="cta-buttons">
          <button className="btn btn-primary">Learn About Our Mission</button>
          <button className="btn btn-secondary">Find a Small Group</button>
          <button className="btn btn-outline-primary">Contact Us</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>&copy; 2025 Blessed Church. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;