import React from 'react';
import PwChangeContainer from '../../Containers/Contents/SettingContainer/PwChangeContainer';
import AlertModal from '../../Common/Modal/AlertModal';
import useInput from '../../Common/Hooks/useInput';


export default () => {
  const AlertState = useInput(false);
  const AlertTextState = useInput("");

  return (
    <>
      <PwChangeContainer
        AlertState={AlertState}
        AlertTextState={AlertTextState}
      />
      {
        AlertState.value &&
        <AlertModal
          {...AlertState}
          text={AlertTextState.value}
        />
      }
    </>
  )
}