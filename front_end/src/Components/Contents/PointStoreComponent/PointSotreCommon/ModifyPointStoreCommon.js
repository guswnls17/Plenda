import React from 'react';
import styled from 'styled-components';
import LineInput from '../../../../Common/Input/LineInput';
import CheckInput from '../../../../Common/Input/CheckInput';
import ImgInput from '../../../../Common/Input/ImgInput';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 40px;

  & > div + div {
    margin-top: 40px;
  }
`

export default ({ 
  adress, 
  adressModal,
  brandName,
  storeName,
  businessNum,
  Phone,
  tags,
  explanation,
  storeImg,
  thumImg,
  markerImg,
  checkdCommonData,
  PointStoreTagsData,
}) => {
  
  return (
    <ContentsBox>
      {/* <LineInput
        {...brandName}
        title={"브랜드명"}
        type={"text"}
        placeholder={"브랜드 이름을 입력해주세요."}
      /> */}
      <LineInput
        {...storeName}
        title={"매장이름"}
        type={"text"}
        placeholder={"매장이름을 입력해주세요. 예) 신림역점, 신대방네거리점 등"}
      />
      <LineInput
        {...businessNum}
        title={"사업자번호"}
        type={"number"}
        placeholder={"사업자번호를 입력해주세요."}
      />
      <LineInput
        {...Phone}
        title={"전화번호 (필수)"}
        type={"number"}
        placeholder={"전화번호를 입력해주세요."}
      />
      <LineInput
        {...adress}
        title={"주소 (필수)"}
        type={"adress"}
        adressOnClick={()=>{adress.setValue({...adress.value, boolean: true })}}
        placeholder={"주소를 입력해주세요."}
      />
      <LineInput
        {...tags}
        title={"태그"}
        type={"tags"}
        placeholder={"태그를 입력해주세요."}
      />
      <LineInput
        {...explanation}
        title={"매장소개"}
        type={"textarea"}
        placeholder={"매장을 소개해주세요."}
      />
      <CheckInput
        title={"매장속성"}
        checkdCommonData={checkdCommonData}
        PointStoreTagsData={PointStoreTagsData}
      />
      <ImgInput
        {...storeImg}
        id={"storeImg"}
        title={"매장사진"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgInput
        {...thumImg}
        id={"thumImg"}
        title={"썸네일"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgInput
        {...markerImg}
        id={"marker"}
        title={"마커아이콘"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
    </ContentsBox>
  )
}