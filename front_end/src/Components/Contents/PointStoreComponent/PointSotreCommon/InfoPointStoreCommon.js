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

export default ({ data, category, link }) => {
  const checkdState = useInput({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: false,
    checkbox5: false,
    checkbox6: true,
    checkbox7: false,
    checkbox8: false,
  })

  const storeImg = useInput([
    {
      img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    },
    {
      img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    },
    {
      img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    },
  ])
  const thumImg = useInput([
    {
      img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    }
  ])
  const markerImg = useInput([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh_J774yoasXV_xX4nMoMu9DOp7V7JDyBH5sIfzpkEqpPyWmVl&usqp=CAU",
    }
  ])
  
  return (
    <ContentsBox>
      {/* <ImgLineItem title={"브랜드 이미지"} img={"https://modo-phinf.pstatic.net/20190510_79/1557487249108wjhDH_JPEG/mosakOAmIU.jpeg?type=f320_320"}/> */}
      <TextLineItem title={"브랜드명"} text={"할리스커피"} type={"text"} />
      <TextLineItem title={"매장이름"} text={"신림역점"} type={"text"} />
      <TextLineItem title={"사업자번호"} text={"1029229182"} type={"business"} />
      <TextLineItem title={"전화번호"} text={"07056869822"} type={"phone"} />
      <TextLineItem title={"주소"} text={"서울시 강남구 강남대로 123-5번지 할리스빌딩 405호"} type={"text"} />
      <TextLineItem title={"태그"} text={["태그1", "태그2", "태그3"]} type={"tag"} />
      <TextLineItem title={"매장소개"} text={"저희 매장은 매우 깔끔하고 음료가 맛있는 카페입니다. \n분위기 있는 식사도 제공하니 많이 찾아주세요."} type={"text"} />
      <CheckLineItem title={"매장속성"} checkdState={checkdState}/>
      <ImgLineItem
        {...storeImg}
        title={"매장사진"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgLineItem
        {...thumImg}
        title={"썸네일"}
        imgWidth={"160px"}
        imgHeight={"100px"}
      />
      <ImgLineItem
        {...markerImg}
        title={"썸네일"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
    </ContentsBox>
  )
}