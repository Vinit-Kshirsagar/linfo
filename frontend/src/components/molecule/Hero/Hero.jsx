// Hero.jsx
// This component displays a welcome message and the user's title.
// It's the first thing a visitor sees, making it an important part of the homepage.

import React from 'react';
import styles from './Hero.module.css';

function Hero({ title }) {
  return (
    <section className={styles.hero}>
      <h1>Welcome to My Portfolio</h1>
      <h2>{title}</h2>
    </section>
  );
}

export default Hero;
