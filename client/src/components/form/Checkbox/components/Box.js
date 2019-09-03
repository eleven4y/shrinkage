import React from 'react';

function Box() {
  return (
    <span className='checkbox__box'>
      <svg className='checkbox__icon'>
        <path
          d='M10 3l-7 7-3-3V4l3 3 7-7z'/>
      </svg>
    </span>
  );
}

export default Box;