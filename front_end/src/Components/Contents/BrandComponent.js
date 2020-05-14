import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from './ContentsTemplate/ContentsTemplate';

const Title = styled.div`
  margin-top: 40px;
  & > p {
    font-weight: bold;
    font-size: 24px;
  }
`

export default () => {
  return (
    <ContentsTemplate>
      <Title>
        <p>브랜드입니다</p>
      </Title>
    </ContentsTemplate>
  )
}