import React from 'react';
import {useParams} from 'react-router-dom';
import StoreItem from '../../../../Common/Item/StoreItem/StoreItem';

const data = [
  {
    store_id: 1,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "5월 가정의달 이벤트 메뉴 적용중"
  },
  {
    store_id: 2,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "5월 가정의달 이벤트 메뉴 적용중"
  },
  {
    store_id: 3,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "5월 가정의달 이벤트 메뉴 적용중"
  },
]

export default () => {
  const params = useParams();

  return (
    <StoreItem
      data={data}
      option={false}
      link={`/menu/${params.brand}/point/`}
    />    
  )
}