import React, { useEffect } from 'react';
import ModifyOperatingComponent from '../../../Components/Contents/PointStoreComponent/ModifyOperatingComponent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOperating } from '../../../store/modules/store';


export default () => {
  let params = useParams();
  const dispatch = useDispatch();
  const {operating} = useSelector(state => state.store);

  useEffect(() => {
    dispatch(getOperating(params.brand, params.id))
  }, [dispatch, params.brand, params.id])

  return (
    <>
      {
        operating ?
        <ModifyOperatingComponent
          operatingData={operating}
        />
        :
        null
      }
    </>
  )
}