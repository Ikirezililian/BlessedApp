import React from "react";
import "../styles/Locations.css";

const Locations = () => {
  return (
    <div className="locations-page">
      {/* Header Section */}
      <header className="locations-header">
        <h1>Our Church Locations</h1>
        <p>Visit one of our branches in Warsaw, Poland. Free parking is available at all locations.</p>
      </header>

      {/* Main Content */}
      <main className="locations-main">
        {/* List of Locations */}
        <section className="locations-list">
          <h2>Our Branches</h2>
          <ul>
            <li>
              <strong>Main Branch:</strong> Zytnia 15c, 01-014 Warsaw, Poland (Free Parking)
            </li>
            <li>
              <strong>Community Branch:</strong> Bananowa 3, Warsaw, Poland (Free Parking)
            </li>
          </ul>
        </section>

        {/* Map Section */}
        <section className="locations-map">
          <h2>Find Us on the Map</h2>
          <iframe
            title="Main Branch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.345827211129!2d20.975521315926875!3d52.244508579761116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9cbd7e80db%3A0x8f8a0bba7ebea36f!2s%C5%BBytnia%2015c%2C%2001-014%20Warsaw%2C%20Poland!5e0!3m2!1sen!2s!4v1618075608801!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <iframe
            title="Community Branch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.4878039244683!2d20.91323661592646!3d52.25265407976157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb92d76ddc03%3A0x8f6148b6c2e92b50!2sBananowa%203%2C%20Warsaw%2C%20Poland!5e0!3m2!1sen!2s!4v1618075708801!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, marginTop: "20px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Locations;
