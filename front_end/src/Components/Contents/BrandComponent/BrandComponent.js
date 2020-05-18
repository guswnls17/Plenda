import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import BrandItem from './BrandItem';

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
      img: "https://lh3.googleusercontent.com/proxy/oTApOdMDT_FDZSHh4RRaAy8iYIZxIq9QE_riEMtbuMNv5hSMfBO6yExvCJHOqjSaHC0Tj2uGdX9G7tsNyBBX6L1snBxZ_GKEVG5Dg2zdyW7iChT5izJPYPGjKLEgXL_GdBuosoCA2cHvjyhjY5xS43oyQvsOAiWoPoC7qCTAKs0bNP-C-A",
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
    <ContentsTemplate sidebarBoolean={false}>
      <ContentsHeader text={"브랜드"} />
      <ContentsBody>
        <BrandItemBox>
          {
            data.map((item, index)=>{
              return(
                <BrandItem
                  img={item.img}
                  title={"할리스커피"}
                  text={"매니저Manager"}
                />
              )
            })
          }
        </BrandItemBox>
      </ContentsBody>
    </ContentsTemplate> 
  )
}