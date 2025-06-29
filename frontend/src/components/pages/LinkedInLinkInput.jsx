import React, { useState } from 'react';

function LinkedInLinkInput() {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   const isValid = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(link);
if (!isValid) {
  setError('❌ Please enter a valid LinkedIn profile URL.');
  return;
}

    setError('');
    console.log('LinkedIn URL is valid:', link);
    // You can now proceed to next step (e.g., send to backend)
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Enter Your LinkedIn Profile URL</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://www.linkedin.com/in/your-username"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
            setError('');
          }}
          required
          style={{
            padding: '10px',
            width: '320px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0072b1',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default LinkedInLinkInput;
