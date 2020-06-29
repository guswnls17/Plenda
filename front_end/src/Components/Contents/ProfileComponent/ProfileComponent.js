import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import useInput from '../../../Common/Hooks/useInput';
import ProfileLineItem from '../../../Common/Item/LineItem/ProfileLineItem';
import TextLineItem from '../../../Common/Item/LineItem/TextLineItem';

const ContentsBody = styled.div`
  padding: 30px 40px;

  @media (max-width: 1000px) {
    padding: 30px 20px;
  }
`

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 40px;

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }

  & > div + div {
    margin-top: 40px;
  }
`

export default () => {
  const profileImg = useInput([
    {
      img: "",
    }
  ])
  return (
    <ContentsTemplate sidebarBoolean={false} bgColor={"#ffffff"}>
      <ContentsHeader 
        title={"프로필"} 
        LinkButton={{
          text: "수정",
          link: "/profile/add"
        }}
      />
      <ContentsBody>
        <ContentsBox>
          <ProfileLineItem
            {...profileImg}
            title={"프로필 이미지"}
            imgWidth={"100px"}
            imgHeight={"100px"}
          />
          <TextLineItem title={"이름"} text={"정현진"} type={"text"} />
          <TextLineItem title={"이메일"} text={"guswnls17@nate.com"} type={"text"} />
        </ContentsBox>
      </ContentsBody>
    </ContentsTemplate> 
  )
}