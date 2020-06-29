import React from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import ChackBox from '../ChackBox/ChackBox';

const LineInput = styled.div`
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* min-height: 60px; */

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
      margin-left: 20px;
    }
  }
  & > div > p {
    margin-right: auto;
    font-weight: ${props => props.inputFocus ? `500` : `300`};
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.inputFocus ? `#253245` : `#000000`};
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  & > .text {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;

    & > img {
      margin-top: auto;
      margin-bottom: 16px;
      width: 16px;
      height: 16px;
    }

    & > input {
      margin-top: 2px;
      padding: 18px 20px 15px 20px;
      border: none;
      width: 100%;
      font-size: 16px;

      &:disabled{
        background-color: white;
      }

      &::placeholder {
        font-size: 14px;
        color: #aaa;
        font-weight: 100;
      }
    }

    & > textarea {
      margin: 17px 20px 10px 20px;
      border: none;
      width: 100%;
      font-size: 16px;
      min-height: 16px;
      height: 26px;
      line-height: 26px;
      resize: none;
      outline: none;
      overflow: hidden;

      &::placeholder {
        font-size: 14px;
        color: #aaa;
        font-weight: 100;
      }
    }

    & > input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { 
      -webkit-appearance: none; 
      -moz-appearance: none; 
      appearance: none; 
    } 

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      transform: ${props => props.inputFocus ? `scaleX(1)` : `scaleX(0)`};
      transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
      border: 1px solid #253245;
    }
  }
`

const TagInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px 10px 10px;
  width: 100%;

  & > div {
    margin-top: 12px;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: #e8e8e8;

    & + div {
      margin-left: 5px;
    }
  
    & > p {
      font-size: 12px;
      color: black;
    }
  }

  & > input {
    margin-top: 12px;
    margin-left: 10px;
    font-size: 16px;
    border: none;
    padding: 6px 0;
    flex: 1;

    &::placeholder {
      font-size: 14px;
      color: #aaa;
      font-weight: 100;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    transform: ${props => props.inputFocus ? `scaleX(1)` : `scaleX(0)`};
    transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    border: 1px solid #253245;
  }
`

const TitleButton = styled.div`
  padding: 5px 20px;
  border: 1px solid #888;
  cursor: pointer;

  &:hover {
    background-color: #253245;

    & > p {
      color: white;
    }
  }

  & > p {
    font-size: 10px;
  }
`

export default ({ title, type, onChange, value, setValue, placeholder, chackState, img, adressOnClick }) => {
  const inputFocus = useInput(false)

  return (
    <LineInput inputFocus={inputFocus.value}>
      <div>
        <p>{title}</p>
        { chackState &&
          <ChackBox
            {...chackState.state}
            id={chackState.id}
            text={chackState.text}
            color={chackState.color}
          />
        }
        { type === "adress" &&
          <TitleButton onClick={adressOnClick}>
            <p>주소찾기</p>
          </TitleButton>
        }
      </div>
      {type === "tags" && 
        <TagInput inputFocus={inputFocus.value}>
          {value.map((item, index) => {
            return (
              <div key={index}>
                <p>{"#"+item}</p>
              </div>
            )
          })}
          <input 
            type="text"
            placeholder={placeholder}
            onFocus={() => {inputFocus.setValue(true)}}
            onBlur={() => {inputFocus.setValue(false)}}
            onChange={(e) => {
              e.target.value = e.target.value.replace(' ', '')
            }}
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                setValue(value.concat(e.target.value));
                e.target.value = ""
              }
            }}
            onKeyDown={(e) => {
              if(e.key === "Backspace"){
                if(e.target.value === ""){
                  setValue(value.slice(0, value.length-1))
                }
              }
              if(e.key === " "){
                setValue(value.concat(e.target.value));
                e.target.value = ""
              }
            }}
          />
        </TagInput>
      }
      {
        type === "textarea" && 
          <div className="text">
            <textarea
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              onFocus={(e) => {
                inputFocus.setValue(true)
                e.target.style.height = e.target.scrollHeight;
              }}
              onBlur={(e) => {
                inputFocus.setValue(false);
              }}
              onKeyDown={(e) => {
                if(e.key === "Enter"){
                  e.target.style.height = "26px";
                  e.target.style.height = e.target.scrollHeight + 26 + "px";
                }
              }}
              onKeyUp={(e) => {
                if(e.key === "Backspace"){
                  e.target.style.height = "26px";
                  e.target.style.height = e.target.scrollHeight + "px";
                }
              }}
            />
          </div>
        }
        {
          type === "adress" && 
            <div className="text">
              <input
                disabled
                value={value}
                onChange={onChange}
                type={type} 
                placeholder={placeholder}
                onFocus={() => {inputFocus.setValue(true)}}
                onBlur={() => {inputFocus.setValue(false)}}
              />
            </div>
        }
        {
          type === "text" && 
          <div className="text">
            {img &&
              <img alt="" src={img} />
            }
            <input
              onChange={onChange}
              value={value} 
              type={type} 
              placeholder={placeholder}
              onFocus={() => {inputFocus.setValue(true)}}
              onBlur={() => {inputFocus.setValue(false)}}
            />
          </div>
        }
        {
          type === "number" && 
          <div className="text">
            {img &&
              <img alt="" src={img} />
            }
            <input
              onChange={onChange}
              value={value} 
              type={type} 
              placeholder={placeholder}
              onFocus={() => {inputFocus.setValue(true)}}
              onBlur={() => {inputFocus.setValue(false)}}
            />
          </div>
        }
        {
          type === "password" && 
          <div className="text">
            {img &&
              <img alt="" src={img} />
            }
            <input
              onChange={onChange}
              value={value} 
              type={type} 
              placeholder={placeholder}
              onFocus={() => {inputFocus.setValue(true)}}
              onBlur={() => {inputFocus.setValue(false)}}
            />
          </div>
        }
    </LineInput>
  )
}