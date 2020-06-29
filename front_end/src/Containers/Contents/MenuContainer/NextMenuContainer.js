import React from 'react';
import NextMenuComponent from '../../../Components/Contents/MenuComponent/NextMenuComponent';


export default ({ confirmState, confirmTextState }) => {
  return (
    <NextMenuComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}