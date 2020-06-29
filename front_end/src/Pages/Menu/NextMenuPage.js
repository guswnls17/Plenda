import React from 'react';
import NextMenuContainer from '../../Containers/Contents/MenuContainer/NextMenuContainer';
import useInput from '../../Common/Hooks/useInput';
import ConfirmModal from '../../Common/Modal/ConfirmModal';


export default () => {
  const confirmState = useInput(false);
  const confirmTextState = useInput(`5월 가정의달 이벤트 메뉴를 \n정말 삭제하시겠습니까?`);
  return (
    <>
      <NextMenuContainer
        confirmState={confirmState}
        confirmTextState={confirmTextState}
      />
      {
        confirmState.value &&
        <ConfirmModal
          {...confirmState}
          text={confirmTextState.value}
        />
      }
    </>
  )
}