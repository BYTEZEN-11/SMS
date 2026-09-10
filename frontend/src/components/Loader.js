import React from 'react';
import '../assets/styles/loader.css';

/**
 * Loader – full-screen spinner with an optional context message.
 * @param {string} message - Text displayed below the spinner (default: "Loading…")
 */
const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;
