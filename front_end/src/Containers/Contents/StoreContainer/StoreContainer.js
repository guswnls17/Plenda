import React, { useEffect } from 'react';
import StoreComponent from '../../../Components/Contents/StoreComponent/StoreComponent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreList, storeDelete } from '../../../store/modules/store';


export default ({ confirmState, confirmTextState }) => {
  let params = useParams();
  const dispatch = useDispatch();
  const {store} = useSelector(state => state.store);

  const storeDeleteHandler = async (bs_id, store_id) => {
    await dispatch(storeDelete(bs_id, store_id))
    dispatch(getStoreList(params.brand))
  }

  useEffect(() => {
    dispatch(getStoreList(params.brand))
  }, [dispatch, params.brand])

  return (
    <>
      <StoreComponent
        confirmState={confirmState}
        confirmTextState={confirmTextState}
        storeDeleteHandler={storeDeleteHandler}
        storeData={store}
      />
    </>
  )
}