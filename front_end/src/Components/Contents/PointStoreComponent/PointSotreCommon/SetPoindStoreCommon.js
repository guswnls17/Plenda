import React from 'react';
import styled from 'styled-components';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';
import useInput from '../../../../Common/Hooks/useInput';

const Container = styled.div`
  & > div + div {
    margin-top: 20px;
  }
`

export default ({ confirmState, confirmTextState }) => {
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
        deleteText={{
          text1: "매장 삭제를 진행하는 경우 매장에 관련된 정보가 모두 삭제되며 모든 정보는 복구가 불가능합니다. 재등록 시 모든 정보는 다시 입력하셔야합니다.",
          text2: "그래도 매장 삭제하기를 진행하시겠습니까?"
        }}
        button={{
          text:"삭제하기",
          // link: "",
          onClick:()=>{ confirmState.setValue(true)},
        }}
      />
    </Container>    
  )
}