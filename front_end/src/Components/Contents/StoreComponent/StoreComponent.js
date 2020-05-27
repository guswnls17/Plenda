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

export default withRouter(({ history }) => {
  const navBarNum = useStoreNavNum();

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        // subTitle={"브랜드 추가하기"} 
        LinkButton={navBarNum.value === 1 ? {
          text: "매장 등록하기",
          link: "/store/add"
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "변경사항",
              link: "/store"
            },
            {
              text: "매장관리",
              link: "/store"
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
        {navBarNum.value === 0 && <ChageStoreCommon/>}
        {navBarNum.value === 1 && <ManagementStoreCommon/>}
      </ContentsBody>
    </ContentsTemplate>
  )
})