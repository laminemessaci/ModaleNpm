import React from 'react';
import {
  Body,
  MainContainer,
  ContentContainer,
  Title,
  Text,
  Button,
} from './index.styles';
import { ColorsSchema, TypeScale } from '../constants/themes.js';
import { StyledCloseIcon } from './assets/index.js';
import { StyledCircleIcon } from './assets/icons/CircleIcon';

const Modal = ({
  setIsOpen,
  title,
  text,
  darkMode,
  close,
  bodyColor,
  closeColor,
  closeSize,
  checkSize,
  colorCheck,
  button,
  bgButton,
  hoverBgButton,
  buttonTextColor,
}) => {
  return (
    <MainContainer>
      <Body color={bodyColor} theme={ColorsSchema}>
        {true && (
          <StyledCloseIcon
            color={closeColor}
            size={closeSize}
            type={closeSize}
            onClick={() => setIsOpen(false)}
          />
        )}
        <ContentContainer>
          {true && (
            <StyledCircleIcon
              theme={ColorsSchema}
              type={TypeScale}
              size={40}
              color={'green-400'}
            />
          )}

          <Title theme={ColorsSchema}>{title || 'Employee created!'}</Title>

          <Text theme={ColorsSchema}>
            {text || 'If you want, you can create more !'}
          </Text>
          {true && (
            <Button
              onClick={() => setIsOpen(false)}
              theme={ColorsSchema}
              color={bgButton}
              hoverColor={hoverBgButton}
              textColor={buttonTextColor}
            >
              {text || 'Close'}
            </Button>
          )}
        </ContentContainer>
      </Body>
    </MainContainer>
  );
};

export default Modal;
