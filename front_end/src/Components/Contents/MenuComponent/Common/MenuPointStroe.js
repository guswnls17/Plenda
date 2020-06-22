import React from 'react';
import StoreItem from '../../../../Common/Item/StoreItem/StoreItem';

const data = [
  {
    id: 1,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "5월 가정의달 이벤트 메뉴 적용중"
  },
  {
    id: 2,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "5월 가정의달 이벤트 메뉴 적용중"
  },
  {
    id: 3,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "5월 가정의달 이벤트 메뉴 적용중"
  },
]

export default () => {
  return (
    <StoreItem
      data={data}
      option={false}
      link={`/menu/point/`}
    />    
  )
}