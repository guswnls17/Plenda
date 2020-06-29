import React from 'react';
import DashbordComponent from '../../../Components/Contents/DashbordComponent/DashbordComponent';

export default ({ confirmState, confirmTextState}) => {
  return (
    <DashbordComponent
      confirmState={confirmState}
      confirmTextState={confirmTextState}
    />
  )
}