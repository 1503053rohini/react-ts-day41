import React from 'react';
//event bubbling
export default (props)=>{
  return(
    <button onClick={props.onClickHandler} >Click Me</button>
  );
}