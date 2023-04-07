import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  width: 100vh;
`;

export const Body = styled.div.attrs(({ color, theme, darkMode = false }) => ({
  color: color,
  theme: theme,
}))`
  background: ${({ theme, color, darkMode }) => {
    // console.log(theme[color]);
    return darkMode ? theme['neutral-700'] : theme[color];
  }};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-width: 50%;
  min-width: 380px;
  min-height: 200px;
  border-radius: 8px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 260px;
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2.attrs(({ darkMode = false, theme }) => ({
  darkMode: darkMode,
  theme: theme,
}))`
  font-family: sans-serif;
  width: 90%;
  color: ${({ theme, darkMode }) =>
    darkMode ? theme['neutral-100'] : theme['neutral-1000']};
  text-align: center;
  margin: 0;
  padding: 10px;
`;

export const Text = styled.p.attrs(({ color, darkMode = false, theme }) => ({
  color: color,
  theme: theme,
}))`
  font-family: sans-serif;
  font-size: 1.125rem;
  color: ${({ theme, darkMode }) =>
    darkMode ? theme['neutral-100'] : theme['neutral-1000']};
  text-align: center;
  width: 90%;
  margin: 12px 0;
  padding: 9px;
`;

export const Button = styled.button.attrs(
  ({ color, theme, textColor, hoverColor }) => ({
    color: color,
    theme: theme,
    textColor: textColor,
    hoverColor: hoverColor,
  })
)`
  display: block;
  font-size: 1rem;
  font-family: sans-serif;
  padding: 10px 12px;
  border-radius: 5px;
  background: ${({ textColor, theme }) =>
    theme[textColor] || theme['green-300']};
  color: ${({ color, theme }) => theme[color] || theme['neutral-1000']};
  border: none;
  outline: none;
  cursor: pointer;

  &&:hover {
    background: ${({ theme, hoverColor }) =>
      theme[hoverColor] || theme['green-200']};
  }
`;

export const OverlyModal = styled.div.attrs(({ theme, backgroundColor }) => ({
  theme,
  backgroundColor,
}))`
  background: ${({ theme, backgroundColor }) =>
    theme[backgroundColor] || theme['neutral-500']};
  height: 100vh;
  width: 100%;
  position: fixed;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.2s ease-out;
  z-index: 1;
`;
