import React from 'react';
import styled from 'styled-components';
import TextLineItem from '../../../../Common/Item/LineItem/TextLineItem';
import ImgLineItem from '../../../../Common/Item/LineItem/ImgLineItem';
import useInput from '../../../../Common/Hooks/chackdInput';

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

export default () => {
  const brandImg = useInput([
    {
      img: "https://modo-phinf.pstatic.net/20190510_79/1557487249108wjhDH_JPEG/mosakOAmIU.jpeg?type=f320_320",
    }
  ])

  return (
    <ContentsBox>
      <ImgLineItem
        {...brandImg}
        title={"브랜드 이미지"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
      <TextLineItem title={"브랜드 이름"} text={"할리스커피"} type={"text"} />
      <TextLineItem title={"사업자번호"} text={"1029229182"} type={"business"} />
      <TextLineItem title={"전화번호"} text={"07056869822"} type={"phone"} />
      <TextLineItem title={"주소"} text={"서울시 강남구 강남대로 123-5번지 할리스빌딩 405호"} type={"text"} />
    </ContentsBox>
  )
}