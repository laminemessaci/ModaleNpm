import styled from 'styled-components';
import { ReactComponent as CloseIcon } from './xmark-solid.svg';

/**
 * [description]
 */

export const StyledCloseIcon = styled(CloseIcon).attrs(
  ({ theme, type = '1.2rem', color = 'rgb(239 68 68)', size = ' 1.2rem' }) => ({
    fill: color,
    width: size,
    theme: theme,
    type: type,
  })
)`
  fill: ${({ theme, color }) => theme[color]};
  width: ${({ width }) => width};
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 10px;
`;
