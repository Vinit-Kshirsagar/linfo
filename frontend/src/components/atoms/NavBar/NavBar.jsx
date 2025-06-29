// ✅ NavBar.jsx
// This component displays the site owner's name and links
// to their LinkedIn and GitHub profiles.

import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';


function NavBar({ name, linkedin, github }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
       <Link to="/linkedin">
  <button
          style={{
            backgroundColor: '#0072b1',
            color: '#fff',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit LinkedIn Profile</button>
          </Link>


      </div>
    </nav>
  );
}

export default NavBar;