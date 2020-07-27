import React, { useEffect } from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import LineInput from '../../../Common/Input/LineInput';
import useInput from '../../../Common/Hooks/useInput';
import ImgInput from '../../../Common/Input/ImgInput';
import { useAdressState } from '../../../Common/Context/MenuContext';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 40px;

  & > div + div {
    margin-top: 50px;
  }
`

export default () => {
  const adressState = useAdressState()
  const brandName = useInput("");
  const businessNum = useInput("");
  const phoneNum = useInput("");
  const adress = useInput("");
  const imgData = useInput([
    {
      img: "",
      preView: "",
    }
  ]);

  useEffect(() => {
    adressState.setValue({...adressState.value, adress: "" })
  }, [])
  
  return (
    <ContentsTemplate sidebarBoolean={false} bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"브랜드"}
        subTitle={"브랜드 추가하기"} 
        // LinkButton={{
        //   text: "추가하기 +",
        //   link: "/addbrand"
        // }}
        UploadButton= {{
          closetext: "취소",
          uploadtext: "등록",
          closeClick: "/",
          uploadClick: () => {}
        }} 
      />
      <ContentsBody>
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
            {...adressState}
            title={"주소 (필수)"}
            type={"adress"}
            adressOnClick={()=>{adressState.setValue({...adressState.value, boolean: true })}}
            placeholder={"주소를 입력해주세요."}
          />
        </ContentsBox>
      </ContentsBody>
    </ContentsTemplate>
  )
}