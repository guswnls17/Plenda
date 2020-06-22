import React from 'react';
import styled from 'styled-components';
import LineInput from '../../../../Common/Input/LineInput';
import useInput from '../../../../Common/Hooks/useInput';

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
  const bankname = useInput("");
  const account = useInput("");
  const name = useInput("");
  
  return (
    <ContentsBox>
      <LineInput
        {...bankname}
        title={"은행명"}
        type={"text"}
        placeholder={"은행명을 입력해주세요."}
      />
      <LineInput
        {...account}
        title={"계좌번호"}
        type={"text"}
        placeholder={"계좌번호를 입력해주세요."}
      />
      <LineInput
        {...name}
        title={"예금주명"}
        type={"text"}
        placeholder={"예금주명을 입력해주세요."}
      />
    </ContentsBox>
  )
}