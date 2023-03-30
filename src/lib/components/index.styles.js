import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  width: 100vh;
`;

export const BodyModal = styled.div.attrs(({ color, theme }) => ({
  color: color,
  theme: theme,
}))`
  background: ${({ theme, color }) => {
    // console.log(theme[color]);
    return theme[color] || theme['neutral-100'];
  }};
  box-shadow: rgba(
    50,
    50,
    93,
    0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset
  );
  max-width: 50%;
  min-width: 300px;
  min-height: 300px;
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

export const Title = styled.h2.attrs(({ color, theme }) => ({
  color: color,
  theme: theme,
}))`
  font-family: sans-serif;
  width: 90%;
  color: ${({ theme, color }) => theme[color]};
  text-align: center;
  margin: 0;
  padding: 10px;
`;

const Text = styled.p.attrs(({ color, theme }) => ({
  color: color,
  theme: theme,
}))`
  font-family: sans-serif;
  font-size: 1.125rem;
  color: ${({ theme, color }) => theme[color]};
  text-align: center;
  width: 90%;
  margin: 12px 0;
  padding: 9px;
`;

const Button = styled.button.attrs(
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
