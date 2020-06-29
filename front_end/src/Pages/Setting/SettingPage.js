import React from 'react';
import SettingContainer from '../../Containers/Contents/SettingContainer/SettingContainer';
import useInput from '../../Common/Hooks/useInput';
import ConfirmModal from '../../Common/Modal/ConfirmModal';


export default () => {
  const confirmState = useInput(false);

  return (
    <>
      <SettingContainer confirmState={confirmState}/>
      {
        confirmState.value &&
        <ConfirmModal
          {...confirmState}
          text={`정말 회원 탈퇴하기를\n진행하시겠습니까?`}
        />
      }
    </>
  )
}