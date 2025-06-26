// ✅ NavBar.jsx
// This component displays the site owner's name and links
// to their LinkedIn and GitHub profiles.

import React from 'react';
import styles from './NavBar.module.css';

function NavBar({ name, linkedin, github }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
}

export default NavBar;