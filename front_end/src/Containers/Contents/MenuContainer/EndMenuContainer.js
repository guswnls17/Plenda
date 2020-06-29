import React from 'react';
import EndMenuComponent from '../../../Components/Contents/MenuComponent/EndMenuComponent';


export default ({ confirmState, confirmTextState}) => {
  return (
    <EndMenuComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}