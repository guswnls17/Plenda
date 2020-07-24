import React, { useEffect } from 'react';
import ModifyPointStoreComponent from '../../../Components/Contents/PointStoreComponent/ModifyPointStoreComponent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPointStore, getTags } from '../../../store/modules/store';

export default () => {
  let params = useParams();
  const dispatch = useDispatch();
  const {point, tags} = useSelector(state => state.store);

  useEffect(() => {
    dispatch(getPointStore(params.brand, params.id))
    dispatch(getTags(params.brand, params.id))
  }, [dispatch, params.brand, params.id])

  return (
    <>
      { point && tags ? 
        <ModifyPointStoreComponent
          PointStoreData={point}
          PointStoreTagsData={tags}
        />
        :
        null
      }
    </>
  )
}