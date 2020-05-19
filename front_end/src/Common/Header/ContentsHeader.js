import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 30px 20px;
  margin: 0 20px;
  border-bottom: 1px solid #e8e8e8;

  & > p {
    margin-right: auto;
    font-weight: bold;
    font-size: 24px;
  }

  & > a {
    & > div {
      min-width: 100px;
      padding: 10px 20px;
      border: 1px solid #253245;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #253245;

        & p {
          color: white;
        }
      }

      & > p {
        color: #253245;
        font-size: 13px;
      }
    }
  }
`

export default ({ text }) => {
  return (
    <ContentsHeader>
      <p>{text}</p>
      <Link to="addbrand">
        <div>
          <p>추가하기 +</p>
        </div>
      </Link>
    </ContentsHeader> 
  )
}