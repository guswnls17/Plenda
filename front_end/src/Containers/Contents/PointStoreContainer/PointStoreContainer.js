import React from 'react';
import PointStoreComponent from '../../../Components/Contents/PointStoreComponent/PointStoreComponent';


export default ({ CloseModalBoolean, confirmState, confirmTextState }) => {
  return (
    <PointStoreComponent 
      CloseModalBoolean={CloseModalBoolean}
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}