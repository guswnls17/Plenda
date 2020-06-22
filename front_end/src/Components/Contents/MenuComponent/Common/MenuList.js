import React from 'react';
import styled from 'styled-components';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';
import useInput from '../../../../Common/Hooks/chackdInput';

const Container = styled.div`
  & > div + div {
    margin-top: 10px;
  }
`

export default () => {
  const NowMenu = useInput({
    title: "5월 가정의달 이벤트 메뉴",
    start: new Date("2020-04-20"),
    end: new Date("2020-08-20"),
  })

  const NextMenu = useInput({
    title: "5월 가정의달 이벤트 메뉴",
    start: new Date("2020-04-20"),
    end: new Date("2020-08-20"),
  })

  const EndMenu = useInput({
    title: "5월 가정의달 이벤트 메뉴",
    start: new Date("2020-04-20"),
    end: new Date("2020-08-20"),
  })

  return (
    <Container>
      <ContentsBorad
        title={"현재 적용중인 메뉴판"}
        type={"menu"}
        data={NowMenu}
      />
      <ContentsBorad
        more={{
          link: "/menu/next"
        }}
        title={"다음 시즌 적용 메뉴판"}
        type={"menu"}
        data={NextMenu}
      />
      <ContentsBorad
        more={{
          link: "/menu/end"
        }}
        title={"시즌 기간이 지나간 메뉴판"}
        type={"menu"}
        data={EndMenu}
      />
    </Container>
  )
}