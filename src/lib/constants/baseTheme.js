import { createGlobalStyle } from 'styled-components';
import { ColorsSchema, primaryFont } from './themes';

const BaseStyle = createGlobalStyle`

*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body { 
    background: ${ColorsSchema['neutral-100']};
    font-family: ${primaryFont};
  }
`;

export default BaseStyle;
