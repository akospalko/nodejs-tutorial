import React from 'react';
import './StatusMessage.css';

export default function StatusMessage({ message, styling }) {
/*
message - data from statusMessage
styling - create || update
*/

//styling
let messageStyle = 'Message';
if(styling === 'update') {
  messageStyle = ['Message', 'MessageEdit'].join(' ');
}
  return (
    <div className={ messageStyle }> 
      <p> { message } </p>
    </div>
  )
}