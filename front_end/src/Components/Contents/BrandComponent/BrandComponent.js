import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import BrandItem from '../../../Common/Item/BrandItem/BrandItem';


const ContentsBody = styled.div`
  padding: 0 40px;
`

const BrandItemBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export default () => {
  const data = [
    {
      img: "https://t1.daumcdn.net/cfile/tistory/223BA433586D069517",
      title: "할리스커피",
      text: "마스터Master"
    },
    {
      img: "https://dimg.donga.com/wps/NEWS/IMAGE/2013/06/05/55655998.3.jpg",
      title: "스타벅스",
      text: "매니저Manager"
    },
    {
      img: "https://modo-phinf.pstatic.net/20190510_79/1557487249108wjhDH_JPEG/mosakOAmIU.jpeg?type=f320_320",
      title: "비엔나커피",
      text: "매니저Manager"
    },
  ]
  return (
    <ContentsTemplate sidebarBoolean={false} bgColor={"#ffffff"}>
      <ContentsHeader 
        title={"브랜드"} 
        LinkButton={{
          text: "추가하기 +",
          link: "/addbrand"
        }}
        // UploadButton= {{
        //   closetext: "",
        //   uploadtext: "",
        //   closeClick: "",
        //   uploadClick: ""
        // }} 
      />
      <ContentsBody>
        <BrandItemBox>
          {
            data.map((item, index)=>{
              return(
                <BrandItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                />
              )
            })
          }
        </BrandItemBox>
      </ContentsBody>
    </ContentsTemplate> 
  )
}