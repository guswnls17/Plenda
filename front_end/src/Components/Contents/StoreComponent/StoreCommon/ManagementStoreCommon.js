import React from 'react';
import { useParams } from 'react-router-dom';
import StoreItem from '../../../../Common/Item/StoreItem/StoreItem';
import NullItem from '../../../../Common/Item/NullItem/NullItem';

export default ({ confirmState, confirmTextState, storeData, storeDeleteHandler}) => {
  let params = useParams()

  return (
    <>
      { storeData.length !== 0 ?
        <StoreItem
          data={storeData}
          storeDelete={storeDeleteHandler}
          confirmState={confirmState}
          // optionClick={() => {}}
          link={`/store/${params.brand}/point/`}
        />
        :
        <NullItem
          text={`등록된 매장이 없습니다.\n새로운 매장을 등록해주세요.`}
        /> 
      }
    </>
  )
}