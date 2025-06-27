// ✅ ProfileCard.jsx
// This component displays the user's name, title, and a short description.
// It's a quick introduction card that gives context about the person.

import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({ data }) {
  return (
    <div className={styles.card}>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default ProfileCard;