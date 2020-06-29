import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BrandBasicImg from '../../../Images/brandBasicImg.png'

const BrandItem = styled.div`
  margin-top: 40px;
  width: 280px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      width: 160px;
      height: 160px;
      background-color: #e8e8e8;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid #e8e8e8;

      & > img {
        width: 160px;
        height: 160px;
        object-fit: cover;
      }
    }

    & > p:nth-child(2) {
      margin-top: 20px;
      font-weight: 500;
      font-size: 16px;
      color: black;
    }
    & > p:nth-child(3) {
      margin-top: 10px;
      font-weight: 300;
      font-size: 12px;
      color: black;
    }
  }
`

export default ({ img, title, text }) => {
  return (
    <BrandItem>
      <Link to="/dashbord">
        <div>
          {img ?
            <img alt="" src={img} />
            :
            <img alt="" src={BrandBasicImg} />
          }
        </div>
        <p>{title}</p>
        <p>{text}</p>
      </Link>
    </BrandItem>
  )
}