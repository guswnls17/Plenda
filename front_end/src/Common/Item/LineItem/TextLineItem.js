import React from 'react';
import styled from 'styled-components';

const LineInput = styled.div`
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin-right: auto;
    font-weight: 300;
    font-size: 12px;
    color: ${props => props.inputFocus ? `#253245` : `#000000`};
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  & > div {
    width: 100%;

    & > p {
      padding: 15px 10px 15px 10px;
      border: none;
      width: 100%;
      font-size: 16px;
      line-height: 20px;
      white-space:pre;
    }
  }
`

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 20px 15px 10px;
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
`

export default ({ title, text, type }) => {

  return (
    <LineInput>
      <p>{title}</p>
      <div>
        {type === "text" && <p>{text}</p>}
        {type === "phone" && <p>{text.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3")}</p>}
        {type === "business" && <p>{text.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')}</p>}
        {type === "tag" &&
          <Tag>
            {text.map((item, index) => {
              return (
                <div key={index}>
                  <p>{"#"+item}</p>
                </div>
              )
            })}
          </Tag>
        }
      </div>
    </LineInput>
  )
}