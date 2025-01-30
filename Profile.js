import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  // State for profile information
  const [profile, setProfile] = useState({
    name: "Melisa Battal",
    email: "Melisa.doe@example.com",
    phone: "+123456789",
  });

  // State to toggle edit form visibility
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle the edit form
  const toggleEditForm = () => {
    setIsEditing((prev) => !prev);
  };

  // Submit the updated profile
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-overlay">
          <h1>Welcome Back, {profile.name}</h1>
          <p>
            "Your journey of faith inspires us. Stay connected, grow together, and make an impact
            within the Blessed Church community."
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="profile-main">
        {/* Profile Information */}
        <section className="profile-info">
          <h2>Your Profile Details</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <button className="btn btn-primary" onClick={toggleEditForm}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </section>

        {/* Edit Profile Form */}
        {isEditing && (
          <section className="edit-profile-form">
            <h2>Edit Your Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </section>
        )}

        {/* Highlights Section */}
        <section className="profile-highlights">
          <h2>Your Church Highlights</h2>
          <div className="highlight-cards">
            <div className="highlight-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Your Contributions"
              />
              <h3>Contributions</h3>
              <p>Track your donations and see how they’ve impacted lives.</p>
            </div>
            <div className="highlight-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Volunteer Work"
              />
              <h3>Volunteer Work</h3>
              <p>Explore your past volunteering efforts and upcoming opportunities.</p>
            </div>
            <div className="highlight-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Community Events"
              />
              <h3>Community Events</h3>
              <p>Stay updated on events and programs happening at Blessed Church.</p>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities">
          <h2>Explore Opportunities</h2>
          <p>
            Discover ways to grow in your faith and help others. Whether it’s attending a Bible
            study, joining a prayer group, or volunteering, there’s something for everyone.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </section>
      </main>
    </div>
  );
};

export default Profile;