import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import PlendaNoticeCommon from './NoticeCommon/PlendaNoticeCommon';
import BrandNoticeCommon from './NoticeCommon/BrandNoticeCommon';
import { useNoticeNavNum } from '../../../Common/Context/MenuContext';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ history }) => {
  const navBarNum = useNoticeNavNum();

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"공지사항"}
        // subTitle={"브랜드 추가하기"} 
        LinkButton={navBarNum.value === 1 ? {
          text: "글쓰기",
          link: "/notice/add"
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "플렌다",
            },
            {
              text: "브랜드",
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
        {navBarNum.value === 0 && <PlendaNoticeCommon/>}
        {navBarNum.value === 1 && <BrandNoticeCommon/>}
      </ContentsBody>
    </ContentsTemplate>
  )
})