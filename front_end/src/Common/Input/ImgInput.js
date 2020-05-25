import React from 'react';
import styled from 'styled-components';

import Camera from '../Image/camera.png'
import ImgClose from '../Image/imgClose.png'

const ImgInput = styled.div`
  border-bottom: 1px solid #e8e8e8;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    padding: 30px 10px 15px 10px; 

    & > input {
      display: none;
    }

    & > label {
      display: ${props => props.previewImg ? "none" : "flex"};
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #FFFFFF;
      border: 1.5px dashed #e8e8e8;
      border-radius: 5px;
      width: 100px;
      height: 100px;
      
      & > img {
        width: 36px;
      }
    }
  }
`

const ImgBox = styled.div`
  position: relative;
  display: ${props => props.previewImg ? "flex" : "none"};
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

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background-color: #BB6BD9;
    position: absolute;
    top: -12px;
    right: -12px;
    cursor: pointer;

    & > img {
      width: 10px;
      height: 10px;
    }
  }
`

export default ({ title, previewImg, img }) => {

  const ImgChangeHandler = (e) => {
    let fileReader = new FileReader();
    let file = e.target.files[0];

    previewImg.setValue(file);
    
    fileReader.onload = (e) => {
      img.setValue(e.target.result)
    }
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      img.setValue("");
    }
  }

  const ImgCloseHandler = () => {
    img.setValue("");
    previewImg.setValue(null);
  }

  return (
    <ImgInput previewImg={previewImg.value}>
      <p>{title}</p>
      <div>
        <label htmlFor="imgInput">
          <img alt="" src={Camera} />
        </label>
        <ImgBox previewImg={previewImg.value}>
          <div>
            <img alt="" src={img.value} />
          </div>
          <div onClick={ImgCloseHandler}>
            <img alt="" src={ImgClose} />
          </div>
        </ImgBox>
        <input id="imgInput" type="file" onChange={ImgChangeHandler} />
      </div>
    </ImgInput>
  )
}