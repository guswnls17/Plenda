import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import ModifyPointStoreCommon from './PointSotreCommon/ModifyPointStoreCommon';
import useInput from '../../../Common/Hooks/useInput';
import { useDispatch } from 'react-redux';
import { storeImgUpload, thumbnailImg, markerImgUpload, tagsPost, patchStore, getPointStore, getTags } from '../../../store/modules/store';
import imageCompression from 'browser-image-compression';
import { useAlertState, useAdressState } from '../../../Common/Context/MenuContext';


const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ match: {params}, history, adress, adressModal, PointStoreData, PointStoreTagsData }) => {  
  const dispatch = useDispatch();
  const alertState = useAlertState()
  const adressState = useAdressState()

  const checkdCommonData = useInput(PointStoreTagsData.common_tag ? PointStoreTagsData.common_tag : [])
  const brandName = useInput("");
  const storeName = useInput(PointStoreData.alter_name ? PointStoreData.alter_name : "");
  const businessNum = useInput("");
  const Phone = useInput(PointStoreData.phone ? PointStoreData.phone : "");
  const tags = useInput(PointStoreTagsData.custom_tag ? PointStoreTagsData.custom_tag : []);
  const explanation = useInput(PointStoreData.description ? PointStoreData.description : "");

  const storeImg = useInput([
    {
      img: PointStoreData.images[0] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[0]}` : "",
      preView: PointStoreData.images[0] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[0]}` : "",
    },
    {
      img: PointStoreData.images[1] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[1]}` : "",
      preView: PointStoreData.images[1] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[1]}` : "",
    },
    {
      img: PointStoreData.images[2] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[2]}` : "",
      preView: PointStoreData.images[2] ? `http://test.plendar.com/api/image/fetch/store/${PointStoreData.images[2]}` : ""
    },
  ])
  const thumImg = useInput([
    {
      img: PointStoreData.store_thumbnail ? `http://test.plendar.com/api/image/fetch/thumbnail/${PointStoreData.store_thumbnail}` : "",
      preView: PointStoreData.store_thumbnail ? `http://test.plendar.com/api/image/fetch/thumbnail/${PointStoreData.store_thumbnail}` : ""
    },
  ])
  const markerImg = useInput([
    {
      img: PointStoreData.store_marker_icon ? `http://test.plendar.com/api/image/fetch/marker/${PointStoreData.store_marker_icon}` : "",
      preView: PointStoreData.store_marker_icon ? `http://test.plendar.com/api/image/fetch/marker/${PointStoreData.store_marker_icon}` : "",
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
      if(thumImg.value[0].preView !== "" && thumImg.value[0].preView !== undefined ) {
        if(typeof(thumImg.value[0].preView) === "object"){
          const compressedFile = await handleImageUpload(thumImg.value[0].preView)
          const formData = new FormData();
          formData.append("file", compressedFile);
          const {data} = await dispatch(thumbnailImg(formData))
          imgName = data.db_id
        } else {
          imgName = PointStoreData.store_thumbnail
        }
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
      if(markerImg.value[0].preView !== "" && markerImg.value[0].preView !== undefined ) {
        if(typeof(markerImg.value[0].preView) === "object"){
          const compressedFile = await handleImageUpload(markerImg.value[0].preView)
          const formData = new FormData();
          formData.append("file", compressedFile);
          const {data} = await dispatch(markerImgUpload(formData))
          imgName = data.db_id
        } else {
          imgName = PointStoreData.store_marker_icon
        }
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
        if (ImgValue[key].preView !== "" && ImgValue[key].preView !== undefined ) {
          if(typeof(ImgValue[key].preView) === "object"){
            const compressedFile = await handleImageUpload(ImgValue[key].preView)
            const formData = new FormData();
            formData.append("file", compressedFile);
            const {data} = await dispatch(storeImgUpload(formData))
            imgName.push(data.db_id)
          } else {
            imgName.push(PointStoreData.images[key])
          }
        }
      }
      return imgName;
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }


  useEffect(() => {
    adressState.setValue({...adressState.value, adress : PointStoreData.address ? PointStoreData.address : ""})
  }, [])

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={"매장정보 수정하기"} 
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
          closeClick: `/store/${params.brand}/point/${params.id}`,
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
              await dispatch(patchStore(params.brand, params.id, uploadState))
              const tagsState={
                "custom_tag": tags.value,
                "common_tag": checkdCommonData.value
              }
              const {data: tagsData} = await dispatch(tagsPost(params.brand, params.id, tagsState))
              if(tagsData.status === "success"){
                await dispatch(getPointStore(params.brand, params.id))
                await dispatch(getTags(params.brand, params.id))
                return history.push(`/store/${params.brand}/point/${params.id}`);
              }
            } catch(e) {
              console.log(e)
            }
          }
        }} 
      />
      <ContentsBody>
        <ModifyPointStoreCommon
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
          PointStoreTagsData={PointStoreTagsData}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
})