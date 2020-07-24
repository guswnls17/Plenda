import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import AddStoreCommon from './StoreCommon/AddStoreCommon';
import useInput from '../../../Common/Hooks/useInput';
import { useDispatch } from 'react-redux';
import { storeImgUpload, thumbnailImg, markerImgUpload, tagsPost, addStore } from '../../../store/modules/store';
import imageCompression from 'browser-image-compression';
import { useAlertState, useAdressState } from '../../../Common/Context/MenuContext';


const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ match: {params}, history, adress, adressModal }) => { 
  const dispatch = useDispatch();
  const alertState = useAlertState()
  const adressState = useAdressState()

  const checkdCommonData = useInput([])
  const brandName = useInput("");
  const storeName = useInput("");
  const businessNum = useInput("");
  const Phone = useInput("");
  const tags = useInput([]);
  const explanation = useInput("");
  const storeImg = useInput([
    {
      img: "",
      preView: "",
    },
    {
      img: "",
      preView: "",
    },
    {
      img: "",
      preView: "",
    },
  ])
  const thumImg = useInput([
    {
      img: "",
      preView: "",
    },
  ])
  const markerImg = useInput([
    {
      img: "",
      preView: "",
    },
  ])

  const handleImageUpload = async (file) => {
    const imageFile = file;
   
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      return compressedFile
    } catch (err) {
      alert(err);
      console(err);
    }
  } 

  const ThumbnailImgUpload = async() => {
    try {
      let imgName = ""
      if(thumImg.value[0].preView !== "" && thumImg.value[0].preView !== undefined) {
        const compressedFile = await handleImageUpload(thumImg.value[0].preView)
        const formData = new FormData();
        formData.append("file", compressedFile);
        const {data} = await dispatch(thumbnailImg(formData))
        imgName = data.db_id
      }
      return imgName;
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  const MarkerImgUpload = async() => {
    try {
      let imgName = ""
      if(markerImg.value[0].preView !== "" && markerImg.value[0].preView !== undefined) {
        const compressedFile = await handleImageUpload(markerImg.value[0].preView)
        const formData = new FormData();
        formData.append("file", compressedFile);
        const {data} = await dispatch(markerImgUpload(formData))
        imgName = data.db_id
      }
      return imgName;
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  const StoreImgUpload = async() => {
    try {
      let imgName = [];
      const ImgValue = storeImg.value
      for (const key in ImgValue) {
        if (ImgValue[key].preView !== "" && ImgValue[key].preView !== undefined) {
          const compressedFile = await handleImageUpload(ImgValue[key].preView)
          const formData = new FormData();
          formData.append("file", compressedFile);
          const {data} = await dispatch(storeImgUpload(formData))
          imgName.push(data.db_id)
        }
      }
      return imgName;
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={"매장 추가하기"} 
        // LinkButton={navBarNum.value === 1 ? {
        //   text: "매장 등록하기",
        //   link: "/store/add"
        // } : ""}
        // navBarData={{
        //   num: navBarNum,
        //   data: [
        //     {
        //       text: "변경사항",
        //       link: "/store"
        //     },
        //     {
        //       text: "매장관리",
        //       link: "/store"
        //     }
        //   ]
        // }}
        UploadButton= {{
          closetext: "취소",
          uploadtext: "등록",
          closeClick: `/store/${params.brand}`,
          uploadClick: async() => {
            try {
              if(adressState.value.adress === "" || Phone.value === ""){
                return alertState.setValue({
                  boolean: true, 
                  text: "필수 값을 모두 채워주세요!"
                });
              }
              const StoreImgNmae = await StoreImgUpload()
              const ThumImgNmae = await ThumbnailImgUpload()
              const MarkerImgNmae = await MarkerImgUpload()
              const uploadState={
                "alter_name": storeName.value,
                "address": adressState.value.adress,
                "phone": String(Phone.value),
                "description": explanation.value,
                "thumbnail": ThumImgNmae,
                "marker_icon": MarkerImgNmae,
                "images": StoreImgNmae
              }
              const {data} = await dispatch(addStore(params.brand, uploadState))
              const tagsState={
                "custom_tag": tags.value,
                "common_tag": checkdCommonData.value
              }
              const {data: tagsData} = await dispatch(tagsPost(params.brand, data.store_id, tagsState))
              if(tagsData.status === "success"){
                return history.push(`/store/${params.brand}`);
              }
            } catch(e) {
              console.log(e)
            }
          }
        }} 
      />
      <ContentsBody>
        <AddStoreCommon 
          adress={adressState} 
          adressModal={adressModal}
          brandName={brandName}
          storeName={storeName}
          businessNum={businessNum}
          Phone={Phone}
          tags={tags}
          explanation={explanation}
          storeImg={storeImg}
          thumImg={thumImg}
          markerImg={markerImg}
          checkdCommonData={checkdCommonData}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
})