import React, { useState } from 'react';
import BaseStyle from '../constants/baseTheme.js';
import Modal from './../components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [close, setClose] = useState(false);
  const [closeColor, setCloseColor] = useState('neutral-500');
  const [check, setCheck] = useState(false);
  const [button, setButton] = useState(true);
  const [textButton, setTextButton] = useState('Close');

  const [hoverBgButton, setHoverBgButton] = useState('green-200');
  const [buttonTextColor, setButtonTextColor] = useState('neutral-1000');
  const [overlayColor, setOverlayColor] = useState('neutral-500');
  const [bodyColor, setBodyColor] = useState('neutral-1000');
  const [closeSize, setCloseSize] = useState('24px');
  const [checkSize, setCheckSize] = useState('24px');
  const [colorCheck, setColorCheck] = useState('green-300');
  return (
    <>
      <BaseStyle />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          margin: 20,
        }}
      >
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <label htmlFor="close" style={{ fontSize: 22 }}>
            &nbsp; &nbsp; Close X &nbsp;
          </label>
          <input
            id="close"
            type="checkbox"
            checked={close}
            onChange={() => setClose(!close)}
          />
          <label htmlFor="check" style={{ fontSize: 22 }}>
            &nbsp; &nbsp; Check &nbsp;
          </label>
          <input
            id="check"
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
          />

          <label htmlFor="mode" style={{ fontSize: 22 }}>
            &nbsp; &nbsp; darkMode &nbsp;
          </label>
          <input
            id="mode"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="button" style={{ fontSize: 22 }}>
            &nbsp; &nbsp; Button &nbsp;
          </label>
          <input
            id="button"
            type="checkbox"
            checked={button}
            onChange={() => setButton(!button)}
          />
        </div>
      </div>
      <div
        style={{
          margin: 40,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <label style={{ fontSize: 22 }} htmlFor="overlyColor">
          {' '}
          &nbsp; &nbsp; overlayColor &nbsp;
        </label>
        <input
          id="overlyColor"
          type="list"
          list="colors"
          onChange={(e) => {
            setOverlayColor(e.target.value);
          }}
          defaultChecked={overlayColor}
        />
        <datalist id="colors">
          <option value="green-500" />
          <option value="blue-200" />
          <option value="red-200" />
          <option value="neutral-300" />
        </datalist>
      </div>
      {isOpen ? (
        <Modal
          button={button}
          setIsOpen={() => setIsOpen((prev) => !prev)}
          close={close ? () => setIsOpen(false) : false}
          check={check}
          title={title}
          darkMode={darkMode}
          checkSize={'3rem'}
          text={'test'}
          overlayColor={overlayColor}
        />
      ) : null}
    </>
  );
}

export default App;
