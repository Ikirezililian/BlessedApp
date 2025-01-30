import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Donation.css";

const Donation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the Location Page
  const goToLocations = () => {
    navigate("/locations");
  };

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <header className="donation-header">
        <div className="header-overlay">
          <h1>Make a Difference Today</h1>
          <p>Your generosity helps us serve the community and make a lasting impact.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="donation-main">
        {/* Money Donation Section */}
        <section className="donation-money">
          <h2>Donate Money</h2>
          <p>
            Your financial support enables us to provide vital resources, host community events, and
            serve those in need. Every contribution counts.
          </p>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=JR4M6UNRTY3YL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Donate Now
          </a>
        </section>

        {/* Food Donation Section */}
        <section className="donation-food">
          <h2>Donate Food</h2>
          <p>
            Help us stock our pantry with non-perishable food items for families in need. Visit our
            nearest branch to drop off your food donations.
          </p>
          <button className="btn btn-secondary" onClick={goToLocations}>
            Find Drop-Off Locations
          </button>
        </section>

        {/* Clothes Donation Section */}
        <section className="donation-clothes">
          <h2>Donate Clothes</h2>
          <p>
            Give the gift of warmth by donating gently used clothes to those in need. Your kindness
            brings comfort and hope.
          </p>
          <button className="btn btn-outline-primary">Learn More</button>
        </section>
      </main>
    </div>
  );
};

export default Donation;
