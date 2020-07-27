import React from 'react';
import { useParams } from 'react-router-dom';
import StoreItem from '../../../../Common/Item/StoreItem/StoreItem';

const data = [
  {
    id: 1,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "매니저 3명, 스태프 8명"
  },
  {
    id: 2,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "매니저 3명, 스태프 8명"
  },
  {
    id: 3,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    role: "신림점",
    alter_name: "매니저 3명, 스태프 8명"
  },
]

export default () => {
  const params = useParams()
  
  return (
    <StoreItem
      data={data}
      option={false}
      link={`/staff/${params.brand}/point/`}
    />    
  )
}