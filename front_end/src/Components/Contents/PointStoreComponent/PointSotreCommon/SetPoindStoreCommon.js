import React from 'react';
import styled from 'styled-components';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';
import useInput from '../../../../Common/Hooks/useInput';

const Container = styled.div`
  & > div + div {
    margin-top: 20px;
  }
`

export default () => {
  const payment = useInput({
    bank: "기업은행",
    account: "221-65986-65487",
    name: "김또깡"
  })

  return (
    <Container>
      <ContentsBorad
        title={"매장삭제하기"}
        type={"delete"}
        data={payment.value}
        button={{
          text:"삭제하기",
          // link: "",
          onClick:()=>{},
        }}
      />
    </Container>    
  )
}