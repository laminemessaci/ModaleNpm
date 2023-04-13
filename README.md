# Custom Modal Component  React

A styled modal component using the styled-components library. The component contains various styles for the different components.

## Demo

<https://user-images.githubusercontent.com/60298344/230691131-d8fa2b4f-6d71-439a-b5f0-6a5785a109a8.mp4>

## How to install

You can find the npm package [here](https://github.com/laminemessaci/ModaleNpm).\
You can find the github repository [here](https://github.com/laminemessaci/ModaleNpm).

```jsx
npm install customized-modal-react
yarn add customized-modal-react
```

```jsx
import React, { Component } from 'react'
import Modal from 'customized-modal-react'

const Example = () => {

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
          <label htmlFor="chech" style={{ fontSize: 22 }}>
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
```

## 📌 Props

________________________________________________________________________-
| Prop              | Type       | Default                   | Required |
| ----------------- | ---------- | ------------------------- | -------- |
| `setIsOpen`       | () => void | `false`                   | Yes      |
| `title`           | String     | `'Employee is created!'`  | No       |
| `text`            | String     | `'You can create more !'` | No       |
| `darkMode`        | Boolean    | `false`                   | No       |
| `close`           | Boolean    | `true`                    | No       |
| `closeColor`      | String     | `"red-300"`               | No       |
| `closeSize`       | String     | `"1.2rem"`                | No       |
| `check`           | Boolean    | `false`                   | No       |
| `colorCheck`      | String     | `"neutral-1000"`          | No       |
| `checkSize`       | String     | `"iconLarge"`             | No       |
| `animation`       | Boolean    | `false`                   | No       |
| `button`          | Boolean    | `false`                   | No       |
| `bgButton`        | String     | `"green-300"`             | No       |
| `textButton`      | String     | `"Close"`                 | No       |
| `buttonTextColor` | String     | `"neutral-1000"`          | No       |
| `hoverBgButton`   | String     | `"green-200"`             | No       |
| `bodyColor`       | String     | `"neutral-100"`           | No       |
| `overlayColor`    | String     | `"neutral-500"`           | No       |
-------------------------------------------------------------------------

## How to change the colors ?

You have access to a large ColorsSchema palette that you can write as in Tailwind CSS.

The range goes from 50, 100, 200, ... up to 900 except for neutral

The colors are:

- neutral: neutral-000 is white, neutral 1000 is black
- green
- red
- blue
- yellow

For example, if you want to change the color of the close icon, you would add the props close to display the button and closeColor props to change the color like this:

```jsx
<Modal close closeColor="red-500" />
```

## You can change the icons size

You have access to a different sizes.

Here are the sizes:

- `iconLarge`: 3rem,
- `iconBase`: 2rem,
- `header1`: 1.8rem,
- `header2`: 1.6rem,
- `header3`: 1.4rem,
- `header4`: 1.2rem,
- `header5`: 1.1rem,
- `paragraph`: 1rem,
- `helperText`: 0.8rem,
- `copyrightText`: 0.7rem,

For example, if you want to change the size of the close icon, you would add the props close to display the icon and closeSize to change the size.

```jsx
<Modal close closeSize="header3" />
```

## ✌️ License

[MIT](https://opensource.org/licenses/MIT)