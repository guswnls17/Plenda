import React from 'react';
import StoreContainer from '../../Containers/Contents/StoreContainer/StoreContainer';
import ConfirmModal from '../../Common/Modal/ConfirmModal';
import useInput from '../../Common/Hooks/useInput';


export default () => {
  const confirmState = useInput(false);
  const confirmTextState = useInput(`신림역점 매장을\n정말 삭제하시겠습니까?`);
  return (
    <>
      <StoreContainer
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