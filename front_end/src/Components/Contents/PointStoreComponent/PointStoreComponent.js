import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import { usePointStoreNavNum } from '../../../Common/Context/MenuContext';
import ChagePointStoreCommon from './PointSotreCommon/ChagePointStoreCommon';
import InfoPointStoreCommon from './PointSotreCommon/InfoPointStoreCommon';
import OperatingCommon from './PointSotreCommon/OperatingCommon';
import PaymentCommon from './PointSotreCommon/PaymentCommon';
import SetPoindStoreCommon from './PointSotreCommon/SetPoindStoreCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ history, match }) => {
  const navBarNum = usePointStoreNavNum();

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={"신림역점"} 
        LinkButton={navBarNum.value === 1 ? {
          text: "수정하기",
          link: `/store/point/modify/${match.params.id}`
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "변경사항",
            },
            {
              text: "기본정보",
            },
            {
              text: "운영시간",
            },
            {
              text: "결제정보",
            },
            {
              text: "설정",
            },
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
        {navBarNum.value === 0 && <ChagePointStoreCommon/>}
        {navBarNum.value === 1 && <InfoPointStoreCommon/>}
        {navBarNum.value === 2 && <OperatingCommon/>}
        {navBarNum.value === 3 && <PaymentCommon/>}
        {navBarNum.value === 4 && <SetPoindStoreCommon/>}
      </ContentsBody>
    </ContentsTemplate>
  )
})