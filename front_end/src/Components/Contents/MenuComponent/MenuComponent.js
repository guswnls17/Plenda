import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import { useMenuNavNum } from '../../../Common/Context/MenuContext';
import ChageCommon from './Common/ChageCommon';
import MenuList from './Common/MenuList';
import MenuPointStroe from './Common/MenuPointStroe';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ history, match }) => {
  const navBarNum = useMenuNavNum();

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"메뉴판 관리"}
        // subTitle={"신림역점"} 
        LinkButton={navBarNum.value === 0 ? {
          text: "메뉴판 등록하기",
          link: `/menu/add`
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "메뉴판",
            },
            {
              text: "매장별 메뉴판",
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
      <ContentsBody>
        {navBarNum.value === 0 && <MenuList/>}
        {navBarNum.value === 1 && <MenuPointStroe/>}
        {navBarNum.value === 2 && <ChageCommon/>}
      </ContentsBody>
    </ContentsTemplate>
  )
})