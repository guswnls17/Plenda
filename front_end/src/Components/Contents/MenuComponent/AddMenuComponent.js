import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import AddMenuCommon from './Common/AddMenuCommon';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ history, match:{params}, addCategorymodal, addMenuModal }) => {

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"메뉴판 관리"}
        subTitle={"메뉴판 등록하기"} 
        // LinkButton={navBarNum.value === 1 ? {
        //   text: "수정하기",
        //   link: `/store/point/modify/${match.params.id}`
        // } : ""}
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
        UploadButton= {{
          closetext: "취소",
          uploadtext: "등록",
          closeClick: `/menu/${params.brand}`,
          uploadClick: () => {}
        }} 
      />
      <ContentsBody>
        <AddMenuCommon 
          addCategorymodal={addCategorymodal}
          addMenuModal={addMenuModal}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
})