import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import NextMenu from './Common/NextMenu';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ history, match:{params}, confirmState, confirmTextState }) => {

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"메뉴판 관리"}
        subTitle={"다음 시즌 적용 메뉴판"}
        LinkButton={{
          text: "메뉴판 등록하기",
          link: `/menu/${params.brand}/add`
        }} 
        // navBarData={{
        //   num: navBarNum,
        //   data: [
        //     {
        //       text: "변경사항",
        //     },
        //     {
        //       text: "메뉴판",
        //     },
        //     {
        //       text: "매장별 메뉴판",
        //     }
        //   ]
        // }}
        // UploadButton= {{
        //   closetext: "취소",
        //   uploadtext: "등록",
        //   closeClick: "/",
        //   uploadClick: () => {}
        // }} 
      />
      <ContentsBody>
        <NextMenu
          confirmState={confirmState}
          confirmTextState={confirmTextState}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
})