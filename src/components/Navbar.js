import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#0066cc',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profile' },
    { path: '/donation', label: 'Donation' },
    { path: '/services', label: 'Services' },
    { path: '/locations', label: 'Locations' },
    { path: '/bible-listening', label: 'Bible Listening' },
  ];

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Blessed Church
      </div>
      <div>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
