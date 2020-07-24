import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import ModifyBrandCommon from './BrandCommon/ModifyBrandCommon';
import useInput from '../../../Common/Hooks/useInput';
import imageCompression from 'browser-image-compression';
import { patchBrand, getDetailbrand, getbrand } from '../../../store/modules/auth';
import { thumbnailImg } from '../../../store/modules/store';
import { useDispatch } from 'react-redux';
import { useAdressState } from '../../../Common/Context/MenuContext';


const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default ({ adress, adressModal, detailBrand }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()
  const adressState = useAdressState()

  const brandName = useInput(detailBrand.store_name ? detailBrand.store_name : "");
  const businessNum = useInput(detailBrand.bs_reg_num ? detailBrand.bs_reg_num : "");
  const phoneNum = useInput(detailBrand.phone ? detailBrand.phone : "");
  const imgData = useInput([
    {
      img: detailBrand.thumbnail ? `http://test.plendar.com/api/image/fetch/thumbnail/${detailBrand.thumbnail}` : "",
      preView: detailBrand.thumbnail ? `http://test.plendar.com/api/image/fetch/thumbnail/${detailBrand.thumbnail}` : "",
    }
  ]);

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
      if(imgData.value[0].preView !== "" && imgData.value[0].preView !== undefined ) {
        if(typeof(imgData.value[0].preView) === "object"){
          const compressedFile = await handleImageUpload(imgData.value[0].preView)
          const formData = new FormData();
          formData.append("file", compressedFile);
          const {data} = await dispatch(thumbnailImg(formData))
          imgName = data.db_id
        } else {
          imgName = detailBrand.thumbnail
        }
      }
      return imgName;
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  useEffect(() => {
    adressState.setValue({...adressState.value, adress : detailBrand.marker_icon ? detailBrand.marker_icon : ""})
  }, [])
  
  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"브랜드 정보"}
        subTitle={"브랜드 수정하기"} 
        // LinkButton={{
        //   text: "수정하기",
        //   link: "/modifybrand"
        // }}
        // navBarData={{
        //   num: navBarNum,
        //   data: [
        //     {
        //       text: "브랜드 정보"
        //     }
        //   ]
        // }}
        UploadButton= {{
          closetext: "취소",
          uploadtext: "수정",
          closeClick: `/infobrand/${params.brand}`,
          uploadClick: async() => {
            try {
              const ThumImgNmae = await ThumbnailImgUpload()
              const uploadState={
                "store_name": brandName.value,
                "marker_icon": adressState.value.adress,
                "thumbnail": ThumImgNmae,
                "bs_reg_num": businessNum.value
              }
              await dispatch(patchBrand(params.brand, uploadState))
              await dispatch(getDetailbrand(params.brand))
              await dispatch(getbrand())
              return history.push(`/infobrand/${params.brand}`);
            } catch(e) {
              console.log(e.response)
              alert(e)
            }
          }
        }} 
      />
      <ContentsBody>
        <ModifyBrandCommon 
          adress={adressState} 
          adressModal={adressModal} 
          detailBrand={detailBrand}
          brandName={brandName}
          businessNum={businessNum}
          phoneNum={phoneNum}
          imgData={imgData}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
}