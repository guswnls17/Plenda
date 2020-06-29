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
  display: ${props => props.previewImg ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.type === "profile" ? props.imgHeight : "5px"};
  width: ${props => props.imgWidth ? props.imgWidth : "100px"};
  height: ${props => props.imgHeight ? props.imgHeight : "100px"};
  

  & > div:nth-child(1) {
    width: ${props => props.imgWidth ? props.imgWidth : "100px"};
    height: ${props => props.imgHeight ? props.imgHeight : "100px"};
    overflow: hidden;
    border-radius: ${props => props.type === "profile" ? props.imgHeight : "5px"};

    & > img {
      object-fit: cover;
      width: ${props => props.imgWidth ? props.imgWidth : "100px"};
      height: ${props => props.imgHeight ? props.imgHeight : "100px"};
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

const ImgContainer = styled.div`
  margin: 0 10px;
  margin-top: 10px;

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
    width: ${props => props.imgWidth ? props.imgWidth : "100px"};
    height: ${props => props.imgHeight ? props.imgHeight : "100px"};
    border-radius: ${props => props.type === "profile" ? props.imgHeight : "5px"};
    
    & > img {
      width: 36px;
    }
  }
`

export default ({ title, value, setValue, imgWidth, imgHeight, type }) => {

  return (
    <ImgInput >
      <p>{title}</p>
      <div>
        {value.map((item, index) => {
          return (
            <ImgContainer previewImg={item.preView} key={index} imgWidth={imgWidth} imgHeight={imgHeight} type={type} >
              <label htmlFor={`imgInput${index}`}>
                <img alt="" src={Camera} />
              </label>
              <ImgBox previewImg={item.preView} imgWidth={imgWidth} imgHeight={imgHeight} type={type}>
                <div>
                  <img alt="" src={item.img} />
                </div>
                <div 
                  onClick={() => {
                    setValue(value.map((state, id) => {
                      return (
                        id === index ? { ...state, img:"", preView:"" } : state
                      )
                    }))
                  }}
                >
                  <img alt="" src={ImgClose} />
                </div>
              </ImgBox>
              <input id={`imgInput${index}`} type="file" 
                onChange={(e) => {
                  let fileReader = new FileReader();
                  let file = e.target.files[0];
                  
                  fileReader.onload = (e) => {
                    setValue(value.map((state, id) => {
                      return (
                        id === index ? { ...state, img:e.target.result, preView:file } : state
                      )
                    }))
                  }

                  if (file) {
                    fileReader.readAsDataURL(file);
                  } else {
                    setValue(value.map((state, id) => {
                      return (
                        id === index ? { ...state, img:"", preView:"" } : state
                      )
                    }))
                  }
                }} 
              />
            </ImgContainer>
          )
        })}
      </div>
    </ImgInput>
  )
}