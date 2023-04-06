# Custom Modal Component  React

A styled modal component using the styled-components library. The component contains various styles for the different components.



https://user-images.githubusercontent.com/60298344/230358792-341462ea-fcde-4c20-9df0-128af0644fb0.mp4


Uploading 20230406_130128.mp4…


## How to install

You can find the npm package [here](https://github.com/laminemessaci/ModaleNpm).\
You can find the github repository [here](https://github.com/laminemessaci/ModaleNpm).

```jsx
npm install customized-modal-react
```

```jsx
import React, { Component } from 'react'
import Modal from 'customized-modal-react'

const Example = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

return(
    <>

    {isOpen && <Modal darkMode={false} setIsOpen={setIsOpen} close/>}
    <button onClick={() => setIsOpen(true)}>Open</button>

    </>
)
}
```

## 📌 Props

_________________________________________________________________________________
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
----------------------------------------------------------------------------------

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
