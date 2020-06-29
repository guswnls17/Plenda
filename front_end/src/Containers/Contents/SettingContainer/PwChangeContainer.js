import React from 'react';
import PwChangeComponent from '../../../Components/Contents/SettingComponent/PwChangeComponent';


export default ({ AlertState, AlertTextState }) => {
  return (
    <PwChangeComponent
      AlertState={AlertState}
      AlertTextState={AlertTextState}
    />
  )
}