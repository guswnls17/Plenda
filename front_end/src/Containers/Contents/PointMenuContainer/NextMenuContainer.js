import React from 'react';
import NextMenuComponent from '../../../Components/Contents/PointMenuComponent/NextMenuComponent';


export default ({ confirmState, confirmTextState }) => {
  return (
    <NextMenuComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}