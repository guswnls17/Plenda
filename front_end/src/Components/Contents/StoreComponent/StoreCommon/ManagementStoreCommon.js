import React from 'react';
import StoreItem from '../../../../Common/Item/StoreItem/StoreItem';

const data = [
  {
    id: 1,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "username(매니저)"
  },
  {
    id: 2,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "username(매니저)"
  },
  {
    id: 3,
    img: "https://image.chosun.com/sitedata/image/201708/23/2017082302455_0.jpg",
    store: "신림점",
    manager: "username(매니저)"
  },
]

export default () => {
  return (
    <StoreItem
      data={data}
    />    
  )
}