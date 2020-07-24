import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import { useStoreNavNum } from '../../../Common/Context/MenuContext';
import ChageStoreCommon from './StoreCommon/ChageStoreCommon';
import ManagementStoreCommon from './StoreCommon/ManagementStoreCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ match: {params}, storeData, storeDeleteHandler, confirmState, confirmTextState }) => {
  const navBarNum = useStoreNavNum();

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        // subTitle={"브랜드 추가하기"} 
        LinkButton={navBarNum.value === 0 ? {
          text: "매장 추가하기",
          link: `/store/${params.brand}/add`
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "매장관리",
            },
            {
              text: "변경사항",
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
        {navBarNum.value === 0 && <ManagementStoreCommon
          storeData={storeData}
          confirmState={confirmState}
          confirmTextState={confirmTextState}
          storeDeleteHandler={storeDeleteHandler}
        />}
        {navBarNum.value === 1 && <ChageStoreCommon/>}
      </ContentsBody>
    </ContentsTemplate>
  )
})