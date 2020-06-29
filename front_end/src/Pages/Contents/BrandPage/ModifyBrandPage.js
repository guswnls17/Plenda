import React, { useEffect } from 'react';
import ModifyBrandContainer from '../../../Containers/Contents/BrandContainer/ModifyBrandContainer';
import AdressModal from '../../../Common/Modal/AdressModal';
import useInput from '../../../Common/Hooks/useInput';

export default () => {
  const adress = useInput("");
  const basicAdress = useInput("");
  const detailAdress = useInput("");
  const adressModal = useInput(false)
  const adressModalNum = useInput(0)

  useEffect(() => {
    if(adressModal.value) {
      window.document.body.style.overflow = "hidden"
    } else {
      window.document.body.style.overflow = "auto"
    }
  }, [adressModal.value])

  return (
    <>
      <ModifyBrandContainer adress={adress} adressModal={adressModal}/> 
      {
        adressModal.value &&
        <AdressModal 
          {...adressModal}
          adress={adress}
          adressModalNum={adressModalNum}
          basicAdress={basicAdress}
          detailAdress={detailAdress}
        />
      }
    </>
  )
}