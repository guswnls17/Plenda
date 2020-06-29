import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import LineInput from '../../../Common/Input/LineInput';
import useInput from '../../../Common/Hooks/useInput';
import ImgInput from '../../../Common/Input/ImgInput';

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
  const name = useInput("");
  const email = useInput("");
  const imgData = useInput([
    {
      img: "",
      preView: "",
    }
  ]);
  
  return (
    <ContentsTemplate sidebarBoolean={false} bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"프로필"}
        subTitle={"프로필 수정하기"} 
        UploadButton= {{
          closetext: "취소",
          uploadtext: "등록",
          closeClick: "/profile",
          uploadClick: () => {}
        }} 
      />
      <ContentsBody>
        <ContentsBox>
          <ImgInput 
            {...imgData}
            type={"profile"}
            title={"프로필 이미지"}
            imgWidth={"100px"}
            imgHeight={"100px"}
          />
          <LineInput
            {...name}
            title={"이름"}
            type={"text"}
            placeholder={"이름을 입력해주세요."}
          />
          <LineInput
            {...email}
            title={"이메일"}
            type={"text"}
            placeholder={"이메일을 입력해주세요."}
          />
        </ContentsBox>
      </ContentsBody>
    </ContentsTemplate>
  )
}