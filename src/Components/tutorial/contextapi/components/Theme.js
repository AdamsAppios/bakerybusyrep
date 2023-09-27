// Theme.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme Settings</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
