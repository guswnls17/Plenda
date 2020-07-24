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

export default ({ brand }) => {
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
      {
        brand ?
        <ContentsBody>
          <BrandItemBox>
            {
              brand.map((item, index)=>{
                return(
                  <BrandItem
                    key={index}
                    img={item.thumbnail}
                    title={item.store_name}
                    text={item.role}
                    id={item.bs_id}
                  />
                )
              })
            }
          </BrandItemBox>
        </ContentsBody>
        :
        null
      }
    </ContentsTemplate> 
  )
}