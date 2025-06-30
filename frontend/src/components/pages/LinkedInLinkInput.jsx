import React, { useState } from 'react';

function LinkedInLinkInput() {
  const [link, setLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let cleaned = link.trim();

    // Auto-add https:// if user forgot
    if (!cleaned.startsWith('http')) {
      cleaned = 'https://' + cleaned;
    }

    // LinkedIn profile URL pattern
    const isValid = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_]+\/?$/.test(cleaned);

    if (!isValid) {
      setError('❌ Invalid LinkedIn profile URL.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    console.log('✅ Submitted:', cleaned);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submit Your LinkedIn Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text" // ← changed from "url" to avoid browser-level blocking
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
            setError('');
            setSubmitted(false);
          }}
          placeholder="www.linkedin.com/in/your-name"
          required
          style={{
            padding: '10px',
            width: '320px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0072b1',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {submitted && <p style={{ color: 'green', marginTop: '1rem' }}>✅ Link submitted successfully!</p>}
    </div>
  );
}

export default LinkedInLinkInput;
