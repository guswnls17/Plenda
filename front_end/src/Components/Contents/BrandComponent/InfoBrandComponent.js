import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import useInput from '../../../Common/Hooks/useInput';
import InfoBrandCommon from './BrandCommon/InfoBrandCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default () => {
  const navBarNum = useInput(0)

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"브랜드 정보"}
        // subTitle={"브랜드 추가하기"} 
        LinkButton={{
          text: "수정하기",
          link: "/modifybrand"
        }}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "브랜드 정보"
            }
          ]
        }}
        // UploadButton= {{
        //   closetext: "취소",
        //   uploadtext: "등록",
        //   closeClick: "/",
        //   uploadClick: () => {}
        // }} 
      />
      <ContentsBody>
        {navBarNum.value === 0 && <InfoBrandCommon />}
      </ContentsBody>
    </ContentsTemplate>
  )
}