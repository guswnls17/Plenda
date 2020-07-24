import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BasicButton = styled.div`
  & > a {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
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


export default ({ text, link, onClick }) => {
  return (
    <BasicButton onClick={onClick}>
      <Link to={link ? link : "#"}>
        <div>
          <p>{text}</p>
        </div>
      </Link>
    </BasicButton>
  )
}