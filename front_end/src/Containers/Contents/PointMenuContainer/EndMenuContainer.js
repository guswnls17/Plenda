import React from 'react';
import EndMenuComponent from '../../../Components/Contents/PointMenuComponent/EndMenuComponent';


export default ({ confirmState, confirmTextState}) => {
  return (
    <EndMenuComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}