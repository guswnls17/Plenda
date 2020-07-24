import React, { useEffect } from 'react';
import PointStoreComponent from '../../../Components/Contents/PointStoreComponent/PointStoreComponent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPointStore, getTags, getOperating } from '../../../store/modules/store';

export default ({ CloseModalBoolean, confirmState, confirmTextState }) => {
  let params = useParams();
  const dispatch = useDispatch();
  const {point, tags, operating} = useSelector(state => state.store);

  useEffect(() => {
    dispatch(getPointStore(params.brand, params.id))
    dispatch(getTags(params.brand, params.id))
    dispatch(getOperating(params.brand, params.id))
  }, [dispatch, params.brand, params.id])

  return (
    <>
      <PointStoreComponent 
        PointStoreData={point}
        PointStoreTagsData={tags}
        operatingData={operating}
        CloseModalBoolean={CloseModalBoolean}
        confirmState={confirmState}
        confirmTextState={confirmTextState}
      />
    </>
  )
}