import React from 'react';
import StoreComponent from '../../../Components/Contents/StoreComponent/StoreComponent';


export default ({ confirmState, confirmTextState }) => {
  return (
    <StoreComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}