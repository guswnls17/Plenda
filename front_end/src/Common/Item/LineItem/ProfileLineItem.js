import React from 'react';
import styled from 'styled-components';

import profileImg from '../../../Images/profileImg.png'

const ImgInput = styled.div`
  border-bottom: 1px solid #e8e8e8;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    /* padding: 30px 10px 20px 10px; */
    padding: 10px 5px 15px 5px; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
`

const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.imgWidth ? props.imgWidth : "100px"};
  height: ${props => props.imgHeight ? props.imgHeight : "100px"};
  border-radius: ${props => props.imgWidth ? props.imgWidth : "100px"};
  margin: 0 10px;
  margin-top: 10px;
  overflow: hidden;
  

  & > div:nth-child(1) {
    width: ${props => props.imgWidth ? props.imgWidth : "100px"};
    height: ${props => props.imgHeight ? props.imgHeight : "100px"};
    overflow: hidden;
    border-radius: 5px;

    & > img {
      object-fit: cover;
      width: ${props => props.imgWidth ? props.imgWidth : "100px"};
    height: ${props => props.imgHeight ? props.imgHeight : "100px"};
    }
  }
`

export default ({ title, img, value, setValue, imgWidth, imgHeight }) => {

  return (
    <ImgInput>
      {title && <p>{title}</p>}
      <div>
        {value.map((item, index) => {
          return (
            <ImgBox key={index} imgWidth={imgWidth} imgHeight={imgHeight}>
              <div>
                <img alt="" src={item.img ? item.img : profileImg} />
              </div>
            </ImgBox>
          )
        })}
      </div>
    </ImgInput>
  )
}