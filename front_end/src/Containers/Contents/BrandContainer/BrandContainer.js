import React, { useEffect } from 'react';
import BrandComponent from '../../../Components/Contents/BrandComponent/BrandComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getbrand } from '../../../store/modules/auth';


export default () => {
  const dispatch = useDispatch();
  const { brand } = useSelector(state => state.auth);

  useEffect(() => {
    if(!brand){
      dispatch(getbrand())
    }
  }, [brand, dispatch])

  return (
    <>
      <BrandComponent brand={brand}/>
    </>
  )
}