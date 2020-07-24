import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModifyBrandComponent from '../../../Components/Contents/BrandComponent/ModifyBrandComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailbrand } from '../../../store/modules/auth';

export default ({ adress, adressModal }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const {detailBrand} = useSelector(state => state.auth);

  useEffect(() => {
    if(params.brand && !detailBrand){
      dispatch(getDetailbrand(params.brand))
    }
  })

  return (
    <>
      {detailBrand ?
        <ModifyBrandComponent adress={adress} adressModal={adressModal} detailBrand={detailBrand}/>
        :
        null
      }
    </>
  )
}