import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../Common/Hooks/useInput';
import TextLineItem from '../../../../Common/Item/LineItem/TextLineItem';
import CheckLineItem from '../../../../Common/Item/LineItem/CheckLineItem';
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

export default ({ data, category, link, PointStoreData, PointStoreTagsData }) => {
  const checkdState = useInput({
    checkbox1: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('dt') === -1 ? false : true),
    checkbox2: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('patio') === -1 ? false : true),
    checkbox3: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('parking') === -1 ? false : true),
    checkbox4: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('wc') === -1 ? false : true),
    checkbox5: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('smoke') === -1 ? false : true),
    checkbox6: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('kids') === -1 ? false : true),
    checkbox7: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('pets') === -1 ? false : true),
    checkbox8: PointStoreTagsData.common_tag && (PointStoreTagsData.common_tag.indexOf('_24h') === -1 ? false : true),
  })
  
  return (
    <ContentsBox>
      {/* <ImgLineItem title={"브랜드 이미지"} img={"https://modo-phinf.pstatic.net/20190510_79/1557487249108wjhDH_JPEG/mosakOAmIU.jpeg?type=f320_320"}/> */}
      {/* <TextLineItem title={"브랜드명"} text={"할리스커피"} type={"text"} /> */}
      <TextLineItem title={"매장이름"} text={PointStoreData.alter_name ? PointStoreData.alter_name : "미등록"} type={"text"} />
      <TextLineItem title={"사업자번호"} text={"1029229182"} type={"business"} />
      <TextLineItem title={"전화번호"} text={PointStoreData.phone ? PointStoreData.phone : "미등록"} type={"phone"} />
      <TextLineItem title={"주소"} text={PointStoreData.address ? PointStoreData.address : "미등록"} type={"text"} />
      <TextLineItem title={"태그"} text={PointStoreTagsData.custom_tag ? PointStoreTagsData.custom_tag : []} type={"tag"} />
      <TextLineItem title={"매장소개"} text={PointStoreData.description ? PointStoreData.description : "미등록"} type={"text"} />
      <CheckLineItem title={"매장속성"} checkdState={checkdState}/>
      <ImgLineItem
        imgData={PointStoreData.images ? PointStoreData.images : []}
        type={"store"}
        title={"매장사진"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgLineItem
        imgData={PointStoreData.store_thumbnail ? [PointStoreData.store_thumbnail] : []}
        type={"thumbnail"}
        title={"썸네일"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgLineItem
        imgData={PointStoreData.store_marker_icon ? [PointStoreData.store_marker_icon] : []}
        type={"marker"}
        title={"마커아이콘"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
    </ContentsBox>
  )
}