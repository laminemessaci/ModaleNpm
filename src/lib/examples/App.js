import React, { useState } from 'react';
import BaseStyle from '../constants/baseTheme.js';
import Modal from './../components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <BaseStyle />

      <label
        htmlFor="user-active"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        &nbsp; &nbsp; darkMode &nbsp;
      </label>
      <input
        id="user-active"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
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
          checkSize={'3rem'}
          text={'test'}
        />
      ) : null}
    </>
  );
}

export default App;
