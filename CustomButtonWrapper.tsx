import React from 'react';
import CustomButton from './CustomButton';
//event bubbling
export default(props)=>{
  return(
 <CustomButton onClickHandler={props.myOnClickHandler}></CustomButton>
  )
 

}