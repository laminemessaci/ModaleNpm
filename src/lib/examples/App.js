import React, { useState } from 'react';
import BaseStyle from '../constants/baseTheme.js';
import Modal from './../components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <BaseStyle />
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px',
          margin: '50px 50px',
          borderRadius: '5px',
          border: 'none',
          color: 'white',
          backgroundColor: 'green',
          fontSize: '20px',
        }}
      >
        Click to Open Modal
      </button>
      {isOpen ? (
        <Modal
          button={true}
          setIsOpen={() => setIsOpen((prev) => !prev)}
          close={() => setIsOpen(false)}
          check
          darkMode={darkMode}
        />
      ) : null}
    </>
  );
}

export default App;
