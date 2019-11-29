import React from 'react';
import CustomButtonWrapper from './CustomButtonWrapper';

export default function App()
{
  return (
<CustomButtonWrapper myOnClickHandler={()=>alert('Clicked')}></CustomButtonWrapper>
  );
}