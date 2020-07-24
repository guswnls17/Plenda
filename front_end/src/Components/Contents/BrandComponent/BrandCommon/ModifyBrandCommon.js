import React from 'react';
import styled from 'styled-components';
import ImgInput from '../../../../Common/Input/ImgInput';
import LineInput from '../../../../Common/Input/LineInput';

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

export default ({ adress, adressModal, brandName, businessNum, phoneNum, imgData }) => {

  return (
    <ContentsBox>
      <ImgInput
        {...imgData}
        title={"브랜드 로고"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
      <LineInput
        {...brandName}
        title={"브랜드 이름"}
        type={"text"}
        placeholder={"브랜드 이름을 입력해주세요."}
      />
      <LineInput
        {...businessNum}
        title={"사업자번호"}
        type={"number"}
        placeholder={"사업자번호를 입력해주세요."}
      />
      <LineInput
        {...phoneNum}
        title={"전화번호"}
        type={"number"}
        placeholder={"브랜드 전화번호를 입력해주세요."}
      />
      <LineInput
        {...adress}
        title={"주소"}
        type={"adress"}
        adressOnClick={()=>{adress.setValue({...adress.value, boolean: true })}}
        placeholder={"브랜드 주소를 입력해주세요."}
      />
    </ContentsBox>
  )
}