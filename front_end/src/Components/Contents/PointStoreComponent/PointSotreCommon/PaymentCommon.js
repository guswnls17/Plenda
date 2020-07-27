import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';
import useInput from '../../../../Common/Hooks/useInput';

const Container = styled.div`
  & > div + div {
    margin-top: 20px;
  }
`

export default withRouter(({ match }) => {

  const payment = useInput({
    bank: "기업은행",
    account: "221-65986-65487",
    name: "김또깡"
  })

  const zeropay = useInput([
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAACjElEQVR4nO3dS47bQAwE0Jn7XzqrAAEit1hFGcYkj8s2P/V0AX997+rrd0U9X3/V5Kcy4Xae8LKHkDBKuJ0nvOwhJIwSHlYfqssafY5o4WmK8G6+CkQYLzxNEd7NV4EI44WnKcK7+SrQh4WT893Vw3h0K0tISEhISEhI+Jxw+RUICQkJCQkJf5bwAHvqJ0JCQkJCQsK9cFKROdo8uZVNEU6vEvZFeDdFOL1K2Bfh3dT3rpbm6KVMuJ0nfPClTLidJ3zwpUy4nSd88KVMuJ0nfPBlmXBb0eoJ47FkTxXhdXM3/pkivG7uxj9ThNfN3fhnivC6uRsvky0DTSI+1RyNExISEhISEl66Jp7Joqh5Ul2M06LlasK4CAknyQinewpeHeO0aLmaMK5SGEWcHIv2PMUgJIxyZOeTzYSE3U+Ed+eTzYR3Jw4bu6tdT/TtDuOEhISEhISEf05NYNHG5XhkHn0OQkJCQkJCwjD0af71wslL91OUh5CQkJCQkLBONtnTVZmekJCQkJCQ8Dnh4wsf/4jbQFER9kcJF4GiIuyPEi4CRUXYHy2F74s4yXEIfRjfUgkJCQkJCQlnFa2O0h/GlzGyIrxpJrweX8bIivCmmfB6fBkjK8Kb5jcKJ8cmOSYv0ZeavBzynNCEhISEhIT/sXCZY5n1jZsJCQkJCQkJ3/B/wFGg6Ho0lZ0nJCQkJCQknAmj9JOpSYzRFyckJCQkJCR8p7BLP7kefVbCF2OHq9HCqAhfNEeBCAl3RfiiOQr0jwgntby6PHpYSJgfWwbqjhISRseWgbqjhITRsWWg7mgp7OoQOsoxaS4TbucJL1+65jLhdp7w8qVrLhNu5wkvX7rmMuF2nvDypWvu6hdwJWEkXvHKCAAAAABJRU5ErkJggg==",
    }
  ])

  return (
    <Container>
      <ContentsBorad
        title={"계좌정보"}
        type={"payment"}
        data={payment.value}
        button={{
          // text:"삭제하기",
          link: `/store/${match.params.brand}/point/payment/${match.params.id}`,
          onClick:()=>{},
        }}
      />
      <ContentsBorad
        title={"제로페이"}
        type={"zeropay"}
        data={zeropay}
        button={{
          // text:"삭제하기",
          link: `/store/${match.params.brand}/point/zeropay/${match.params.id}`,
          onClick:()=>{},
        }}
      />
    </Container>    
  )
})