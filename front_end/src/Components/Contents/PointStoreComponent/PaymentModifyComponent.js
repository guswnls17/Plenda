import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import ModifyPaymentCommon from './PointSotreCommon/ModifyPaymentCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ match: {params} }) => {  

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={"결제정보 수정하기"} 
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
          uploadClick: () => {}
        }} 
      />
      <ContentsBody>
        <ModifyPaymentCommon/>
      </ContentsBody>
    </ContentsTemplate>
  )
})