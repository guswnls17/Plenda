import React from 'react';
import styled from 'styled-components';

import BrandBasicImg from '../../../Images/brandBasicImg.png'

const ImgInput = styled.div`
  border-bottom: 1px solid #e8e8e8;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    padding: 30px 10px 20px 10px; 
  }
`

const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  

  & > div:nth-child(1) {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 5px;

    & > img {
      object-fit: cover;
      height: 100px;
      width: 100px;
    }
  }
`

export default ({ title, img }) => {

  return (
    <ImgInput>
      <p>{title}</p>
      <div>
        <ImgBox>
          <div>
            <img alt="" src={img ? img : BrandBasicImg} />
          </div>
        </ImgBox>
      </div>
    </ImgInput>
  )
}