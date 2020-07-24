import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import useInput from '../../../Common/Hooks/useInput';
import InfoBrandCommon from './BrandCommon/InfoBrandCommon';
import { useSelector } from 'react-redux';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default () => {
  const params = useParams()
  const navBarNum = useInput(0)
  const {detailBrand} = useSelector(state => state.auth);

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"브랜드 정보"}
        // subTitle={"브랜드 추가하기"} 
        LinkButton={{
          text: "수정하기",
          link: `/infobrand/${params.brand}/modify`
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
      {detailBrand ?
        <ContentsBody>
          {navBarNum.value === 0 && <InfoBrandCommon detailBrand={detailBrand}/>}
        </ContentsBody>
        :
        null
      }
    </ContentsTemplate>
  )
}