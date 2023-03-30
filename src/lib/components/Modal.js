import React from 'react';
import { BodyModal, MainContainer } from './index.styles';
import { ColorsSchema } from '../constants/themes.js';

const Modal = () => {
  return (
    <>
      {' '}
      <MainContainer className="modalContainer">
        <BodyModal color="blue-50" theme={ColorsSchema}>
          My Modal ..
        </BodyModal>
      </MainContainer>
    </>
  );
};

export default Modal;
