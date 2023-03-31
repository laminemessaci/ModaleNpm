import { createGlobalStyle } from 'styled-components';
import { ColorsSchema, primaryFont } from './themes';

const BaseStyle = createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: inherit;
}

*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body { 
    background: ${ColorsSchema['neutral-100']};
    font-family: ${primaryFont};
    font-size: 1rem;
  }
`;

export default BaseStyle;
