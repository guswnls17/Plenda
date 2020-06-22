import React from 'react';
import styled from 'styled-components';

import storeProperty_1 from '../../../Images/storeProperty_1.png';
import storeProperty_2 from '../../../Images/storeProperty_2.png';
import storeProperty_3 from '../../../Images/storeProperty_3.png';
import storeProperty_4 from '../../../Images/storeProperty_4.png';
import storeProperty_5 from '../../../Images/storeProperty_5.png';
import storeProperty_6 from '../../../Images/storeProperty_6.png';
import storeProperty_7 from '../../../Images/storeProperty_7.png';
import storeProperty_8 from '../../../Images/storeProperty_8.png';
import storeProperty_1_true from '../../../Images/storeProperty_1_true.png';
import storeProperty_2_true from '../../../Images/storeProperty_2_true.png';
import storeProperty_3_true from '../../../Images/storeProperty_3_true.png';
import storeProperty_4_true from '../../../Images/storeProperty_4_true.png';
import storeProperty_5_true from '../../../Images/storeProperty_5_true.png';
import storeProperty_6_true from '../../../Images/storeProperty_6_true.png';
import storeProperty_7_true from '../../../Images/storeProperty_7_true.png';
import storeProperty_8_true from '../../../Images/storeProperty_8_true.png';

const CheckBox = styled.div`
  border-bottom: 1px solid #e8e8e8;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    padding: 10px 10px 15px 10px; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
`

const CheckInput = styled.div`
  margin: 0 5px;
  margin-top: 10px;

  & > div {
    display: block;

    & > div {
      width: 60px;
      height: 60px;
      overflow: hidden;

      & > img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
    & > p {
      margin-top: 4px;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      text-align: center;

      color: #888888;
    }
  }
`

export default ({ title, checkdState }) => {

  return (
    <CheckBox>
      <p>{title}</p>
      <div>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox1 ? storeProperty_1_true : storeProperty_1} />
            </div>
            <p>영업중</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox2 ? storeProperty_2_true : storeProperty_2} />
            </div>
            <p>주문가능</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox3 ? storeProperty_3_true : storeProperty_3} />
            </div>
            <p>주차장</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox4 ? storeProperty_4_true : storeProperty_4} />
            </div>
            <p>화장실</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox5 ? storeProperty_5_true : storeProperty_5} />
            </div>
            <p>흡연실</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox6 ? storeProperty_6_true : storeProperty_6} />
            </div>
            <p>키즈존</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox7 ? storeProperty_7_true : storeProperty_7} />
            </div>
            <p>애견 동반가능</p>
          </div>
        </CheckInput>
        <CheckInput>
          <div>
            <div>
              <img alt="" src={checkdState.value.checkbox8 ? storeProperty_8_true : storeProperty_8} />
            </div>
            <p>24시간 영업</p>
          </div>
        </CheckInput>
      </div>
    </CheckBox>
  )
}