import styled from 'styled-components';
import { ColorsSchema, TypeScale } from '../../../constants/themes.js';
import { ReactComponent as CircleIcon } from './circle.svg';

export const StyledCircleIcon = styled(CircleIcon).attrs(
  ({ theme, type, color = 'rgb(24 239 172)', size = '3rem' }) => ({
    fill: color,
    width: size,
    theme: theme,
  })
)`
  fill: ${({ theme, fill }) => theme[fill]};
  width: ${({ type, width }) => type[width]};
`;
