import React, { useEffect } from 'react';
import AddStoreContainer from '../../Containers/Contents/StoreContainer/AddStoreContainer';
import useInput from '../../Common/Hooks/useInput';
import AdressModal from '../../Common/Modal/AdressModal';


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
      <AddStoreContainer adress={adress} adressModal={adressModal}/> 
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