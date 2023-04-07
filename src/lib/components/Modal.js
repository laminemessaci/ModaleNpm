import PropTypes from 'prop-types';
import React from 'react';
import { ColorsSchema, TypeScale } from '../constants/themes.js';
import { StyledCircleIcon } from './assets/icons/CircleIcon';
import { StyledCloseIcon } from './assets/index.js';
import {
  Body,
  Button,
  ContentContainer,
  MainContainer,
  OverlyModal,
  Text,
  Title,
} from './index.styles';

const Modal = ({
  setIsOpen,
  title,
  text,
  darkMode,
  close,
  overlayColor,
  bodyColor,
  closeColor,
  closeSize,
  checkSize,
  colorCheck,
  button,
  textButton,
  check,
  bgButton,
  hoverBgButton,
  buttonTextColor,
}) => {
  return (
    <MainContainer>
      <Body color={bodyColor} theme={ColorsSchema} darkMode={darkMode}>
        {close && (
          <StyledCloseIcon
            color={closeColor}
            size={closeSize}
            type={closeSize}
            onClick={() => setIsOpen(false)}
          />
        )}
        <ContentContainer>
          {check && (
            <StyledCircleIcon
              theme={ColorsSchema}
              type={TypeScale}
              size={checkSize}
              color={colorCheck}
            />
          )}

          <Title darkMode={darkMode} theme={ColorsSchema}>
            {title || 'Employee created successfully !'}
          </Title>

          <Text theme={ColorsSchema} darkMode={darkMode}>
            {text || null}
          </Text>
          {button && (
            <Button
              onClick={() => setIsOpen(false)}
              theme={ColorsSchema}
              color={bgButton}
              hoverColor={hoverBgButton}
              textColor={buttonTextColor}
            >
              {textButton || 'Close'}
            </Button>
          )}
        </ContentContainer>
      </Body>
      <OverlyModal
        theme={ColorsSchema}
        overlayColor={overlayColor}
        onClick={() => setIsOpen(false)}
      />
    </MainContainer>
  );
};

export default Modal;

Modal.prototypes = {
  setIsOpen: PropTypes.func.isRequired,
  close: PropTypes.bool,
  check: PropTypes.bool,
  darkMode: PropTypes.bool,
  bodyColor: PropTypes.string,
  closeColor: PropTypes.string,
  closeSize: PropTypes.string,
  checkSize: PropTypes.string,
  colorCheck: PropTypes.string,
  button: PropTypes.Button,
  textButton: PropTypes.string,
  bgButton: PropTypes.string,
  hoverBgButton: PropTypes.string,
  buttonTextColor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
