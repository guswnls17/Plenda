import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../Common/Hooks/chackdInput';
import MenuBorad from '../../../../Common/Item/Borad/MenuBorad';

const Container = styled.div`
  & > div + div {
    margin-top: 10px;
  }
`

export default ({ confirmState, confirmTextState }) => {
  const MenuData = useInput([
    {
      id: 0,
      title: "5월 가정의달 이벤트 메뉴",
      start: new Date("2020-04-20"),
      end: new Date("2020-08-20"),
    },
    {
      id: 1,
      title: "5월 가정의달 이벤트 메뉴",
      start: new Date("2020-04-20"),
      end: new Date("2020-08-20"),
    },
    {
      id: 2,
      title: "5월 가정의달 이벤트 메뉴",
      start: new Date("2020-04-20"),
      end: new Date("2020-08-20"),
    },
  ])

  return (
    <Container>
      {MenuData.value.map((item, index) => {
        return (
          <MenuBorad
            key={index}
            type="next"  
            data={item}
            link={`/menu/post/${item.id}`}
            confirmState={confirmState}
          />
        )
      })}
    </Container>
  )
}