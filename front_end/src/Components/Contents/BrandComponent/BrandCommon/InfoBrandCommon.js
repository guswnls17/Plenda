import React from 'react';
import styled from 'styled-components';
import TextLineItem from '../../../../Common/Item/LineItem/TextLineItem';
import ImgLineItem from '../../../../Common/Item/LineItem/ImgLineItem';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 40px;

  & > div + div {
    margin-top: 40px;
  }
`

export default ({ detailBrand }) => {

  return (
    <ContentsBox>
      <ImgLineItem
        imgData={detailBrand.thumbnail ? [detailBrand.thumbnail] : ""}
        type={"thumbnail"}
        title={"브랜드 이미지"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
      <TextLineItem title={"브랜드 이름"} text={detailBrand.store_name ? detailBrand.store_name : "미등록"} type={"text"} />
      <TextLineItem title={"사업자번호"} text={detailBrand.bs_reg_num ? detailBrand.bs_reg_num : "미등록"} type={"business"} />
      <TextLineItem title={"전화번호"} text={detailBrand.phone ? detailBrand.phone : "미등록"} type={"phone"} />
      <TextLineItem title={"주소"} text={detailBrand.marker_icon ? detailBrand.marker_icon : "미등록"} type={"text"} />
    </ContentsBox>
  )
}