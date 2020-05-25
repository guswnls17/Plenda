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
      padding: 30px 10px 20px 10px;
      border: none;
      width: 100%;
      font-size: 16px;
      line-height: 20px;
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
      </div>
    </LineInput>
  )
}