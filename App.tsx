import React from 'react';
import CustomButtonWrapper from './CustomButtonWrapper';
//event bubbling
export default function App()
{
  return (
<CustomButtonWrapper myOnClickHandler={()=>alert('Clicked')}></CustomButtonWrapper>
  );
}