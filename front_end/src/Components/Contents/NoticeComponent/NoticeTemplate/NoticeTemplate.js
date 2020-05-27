import React, { useEffect, cloneElement } from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../../Common/Header/ContentsHeader';
import useInput from '../../../../Common/Hooks/useInput';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default ({ children }) => {
  const navBarNum = useInput(0)

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"공지사항"}
        // subTitle={""} 
        LinkButton={navBarNum.value === 1 ? {
          text: "글쓰기",
          link: "/notice/add"
        } : ""}
        navBarData={{
          num: navBarNum,
          data: [
            {
              text: "플렌다"
            },
            {
              text: "브랜드"
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
      {React.Children.map(children(data, index)=> {
        return (
          <div key={index}>
            {cloneElement(data, {navBarNum: navBarNum.value})}
          </div>
        )
      })}
      </ContentsBody>
    </ContentsTemplate>
  )
}