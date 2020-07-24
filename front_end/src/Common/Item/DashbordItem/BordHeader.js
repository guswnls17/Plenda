import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BordHeader = styled.div`
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 70px;
    height: 70px;
    top: -20px;
    left: 15px;
    background: ${props => props.iconBoxColor ? props.iconBoxColor : "#eee"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    & > img {
      width: 30px;
    }
  } 

  & > p {
    margin-left: 100px;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
  }

  & > a {
    margin-top: 2px;
    margin-left: auto;
    margin-right: 24px;
    cursor: pointer;

    & > p {
      font-weight: 300;
      font-size: 14px;
      color: #000000;
    }
  }
`

export default ({ bordHeader }) => {
  return (
    <BordHeader iconBoxColor={bordHeader.iconBoxColor}>
      <div><img alt="" src={bordHeader.iconBoxImg}/></div>
      <p>{bordHeader.title}</p>
      <Link to={bordHeader.link}>
        <p onClick={bordHeader.linkonClick}>more ›</p>
      </Link>
    </BordHeader>
  )
}