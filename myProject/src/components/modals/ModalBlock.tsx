import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { BlurContainer } from '../../styles/Common.styled';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'flex-start',
    width: '33%',
    gap: '20px',
    justifyContent: 'space-between',
  },
};

export type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

Modal.setAppElement('#root');

export default function ModalBlock({ isOpen, onClose }: ModalPropsType) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <BlurContainer>
        <button onClick={onClose}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </BlurContainer>
    </Modal>
  );
}
