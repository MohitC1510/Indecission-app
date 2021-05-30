import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    // ariaHideApp={false}
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {props.selectedOption && <p className='modal__para'>{props.selectedOption}</p>}
    <button className='buttons' onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
