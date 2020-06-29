import React from 'react';
import PointStoreContainer from '../../Containers/Contents/PointStoreContainer/PointStoreContainer';
import ClosedModal from '../../Common/Modal/ClosedModal';
import useInput from '../../Common/Hooks/useInput';
import ConfirmModal from '../../Common/Modal/ConfirmModal';

export default () => {
  const CloseModalBoolean = useInput(false);
  const confirmState = useInput(false);
  const confirmTextState = useInput(`신림역점 매장을\n정말 삭제하시겠습니까?`);

  return (
    <>
      <PointStoreContainer 
        CloseModalBoolean={CloseModalBoolean}
        confirmState={confirmState}
        confirmTextState={confirmTextState}
      />
      {CloseModalBoolean.value &&
        <ClosedModal
          {...CloseModalBoolean}
        />
      }
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