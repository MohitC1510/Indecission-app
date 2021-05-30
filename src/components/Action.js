import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button className='big-button'
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
         <div className='big-button_text'>What should I do?</div>
      </button>
    </div>
  );
};

export default Action;
