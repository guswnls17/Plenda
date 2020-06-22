import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../Common/Hooks/useInput';
import ImgInput from '../../../../Common/Input/ImgInput';

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
  const zeropay = useInput([
    {
      img: "",
      preView: "",
    },
  ])
  
  return (
    <ContentsBox>
      <ImgInput
        {...zeropay}
        title={"제로페이 QR코드"}
        imgWidth={"100px"}
        imgHeight={"100px"}
      />
    </ContentsBox>
  )
}