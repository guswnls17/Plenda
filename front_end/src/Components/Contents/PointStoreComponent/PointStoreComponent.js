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

export default withRouter(({ history, match, CloseModalBoolean, confirmState, confirmTextState, PointStoreData, PointStoreTagsData, operatingData }) => {
  const navBarNum = usePointStoreNavNum();
  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={PointStoreData && PointStoreData.alter_name} 
        LinkButton={navBarNum.value === 0 ? {
          text: "수정하기",
          link: `/store/${match.params.brand}/point/modify/${match.params.id}`
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
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
            {
              text: "변경사항",
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
      {PointStoreData && PointStoreTagsData && operatingData?
        <ContentsBody>
          {navBarNum.value === 0 && <InfoPointStoreCommon 
            PointStoreData={PointStoreData}
            PointStoreTagsData={PointStoreTagsData}
          />}
          {navBarNum.value === 1 && <OperatingCommon 
            CloseModalBoolean={CloseModalBoolean}
            operatingData={operatingData}
          />}
          {navBarNum.value === 2 && <PaymentCommon/>}
          {navBarNum.value === 3 && <SetPoindStoreCommon
            confirmState={confirmState}
            confirmTextState={confirmTextState}
          />}
          {navBarNum.value === 4 && <ChagePointStoreCommon/>}
        </ContentsBody>
        :
        null
      }
    </ContentsTemplate>
  )
})