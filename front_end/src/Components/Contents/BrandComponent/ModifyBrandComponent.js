import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import ModifyBrandCommon from './BrandCommon/ModifyBrandCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default ({ adress, adressModal }) => {

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
          closeClick: "/infobrand",
          uploadClick: () => {}
        }} 
      />
      <ContentsBody>
        <ModifyBrandCommon adress={adress} adressModal={adressModal}/>
      </ContentsBody>
    </ContentsTemplate>
  )
}