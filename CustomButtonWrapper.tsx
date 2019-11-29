import React from 'react';
import CustomButton from './CustomButton';

export default(props)=>{
  return(
 <CustomButton onClickHandler={props.myOnClickHandler}></CustomButton>
  )
 

}