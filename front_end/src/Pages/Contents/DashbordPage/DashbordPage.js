import React from 'react';
import DashbordContainer from '../../../Containers/Contents/DashbordContainer/DashbordContainer';
import useInput from '../../../Common/Hooks/useInput';
import ConfirmModal from '../../../Common/Modal/ConfirmModal';

export default () => {
  const confirmState = useInput(false);
  const confirmTextState = useInput("");
  return (
    <>
      <DashbordContainer 
        confirmState={confirmState}
        confirmTextState={confirmTextState}
      />
      {
        confirmState.value &&
        <ConfirmModal
          {...confirmState}
          title={"메뉴판 변경사항"}
          text={confirmTextState.value}
        />
      }
    </>
  )
}