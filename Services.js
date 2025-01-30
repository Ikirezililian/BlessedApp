import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <header className="services-header">
        <h1>Volunteer and Serve</h1>
        <p>
          The two great commandments are to love God and to love our neighbor
          (see Matthew 22:37–40). We follow the example of Jesus Christ as we serve
          and help others. Opportunities to serve others are limitless. As you find
          ways to serve, your kind words and deeds can lift burdens and gladden hearts.
        </p>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a
                href="https://www.justserve.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JustServe
              </a>
            </li>
            <li>
              <a
                href="https://www.churchofjesuschrist.org/callings/missionary?lang=eng"
                target="_blank"
                rel="noopener noreferrer"
              >
                Serve a Mission
              </a>
            </li>
            <li>
              <a
                href="https://www.familysearch.org/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FamilySearch
              </a>
            </li>
            <li>
              <a
                href="https://www.churchofjesuschrist.org/inspiration/humanitarian-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                Church Humanitarian Efforts
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Care for People Section */}
      <section className="care-section">
        <h2>Care for People in Need</h2>
        <div className="care-cards">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Church Humanitarian Efforts"
            />
            <h3>Church Humanitarian Efforts</h3>
            <p>Discover the Church’s worldwide efforts to care for those in need.</p>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Life's Challenges"
            />
            <h3>Find Help for Life’s Challenges</h3>
            <p>Support for you and for those you serve in times of need.</p>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="JustServe Opportunities"
            />
            <h3>JustServe.org</h3>
            <p>Find local service opportunities in your community.</p>
          </div>
        </div>
      </section>

      {/* Share the Gospel Section */}
      <section className="gospel-section">
        <h2>Share the Gospel of Jesus Christ</h2>
        <p>Learn how you can share the message of Jesus Christ with others.</p>
        <button className="btn btn-primary">Learn More</button>
      </section>

      {/* Additional Features */}
      <section className="additional-features">
        <h2>Additional Services</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Prayer Requests</h3>
            <p>Submit your prayer requests and let us pray for you.</p>
          </div>
          <div className="feature-item">
            <h3>Counseling Services</h3>
            <p>
              Access personal or family counseling services to guide you through
              life’s challenges.
            </p>
          </div>
          <div className="feature-item">
            <h3>Weekly Bible Studies</h3>
            <p>Join our weekly Bible study groups to grow in faith together.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
