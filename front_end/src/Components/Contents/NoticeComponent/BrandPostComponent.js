import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import PostNoticeCommon from './NoticeCommon/PostNoticeCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default () => {
  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"공지사항"}
        subTitle={"브랜드"} 
        // LinkButton={navBarNum.value === 1 ? {
        //   text: "글쓰기",
        //   link: "/modifybrand"
        // } : ""}
        // navBarData={{
        //   num: navBarNum,
        //   data: [
        //     {
        //       text: "플렌다"
        //     },
        //     {
        //       text: "브랜드"
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
        <PostNoticeCommon/>
      </ContentsBody>
    </ContentsTemplate>
  )
}