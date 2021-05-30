import React from 'react';

const Option = (props) => (
  <div className='options'>
     <p className='options__para'>{props.count}. {props.optionText}</p>
    <button className='buttons buttons--link'
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
