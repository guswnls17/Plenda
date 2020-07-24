import React from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';

import storeProperty_1 from '../../Images/storeProperty_1.png';
import storeProperty_2 from '../../Images/storeProperty_2.png';
import storeProperty_3 from '../../Images/storeProperty_3.png';
import storeProperty_4 from '../../Images/storeProperty_4.png';
import storeProperty_5 from '../../Images/storeProperty_5.png';
import storeProperty_6 from '../../Images/storeProperty_6.png';
import storeProperty_7 from '../../Images/storeProperty_7.png';
import storeProperty_8 from '../../Images/storeProperty_8.png';
import storeProperty_1_true from '../../Images/storeProperty_1_true.png';
import storeProperty_2_true from '../../Images/storeProperty_2_true.png';
import storeProperty_3_true from '../../Images/storeProperty_3_true.png';
import storeProperty_4_true from '../../Images/storeProperty_4_true.png';
import storeProperty_5_true from '../../Images/storeProperty_5_true.png';
import storeProperty_6_true from '../../Images/storeProperty_6_true.png';
import storeProperty_7_true from '../../Images/storeProperty_7_true.png';
import storeProperty_8_true from '../../Images/storeProperty_8_true.png';

const CheckBox = styled.div`
  border-bottom: 1px solid #e8e8e8;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    padding: 20px 10px 15px 10px; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
`

const CheckInput = styled.div`
  margin: 0 5px;
  /* margin-top: 10px; */

  & > input {
    display: none;
  }
  
  & > input:checked + label{
    & > p {
      color: black;
    }
  }

  & > label {
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

export default ({ title, checkdCommonData, PointStoreTagsData=[] }) => {
  const checkdState = useInput({
    checkbox1: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('dt') === -1 ? false : true) : false,
    checkbox2: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('patio') === -1 ? false : true) : false,
    checkbox3: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('parking') === -1 ? false : true) : false,
    checkbox4: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('wc') === -1 ? false : true) : false,
    checkbox5: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('smoke') === -1 ? false : true) : false,
    checkbox6: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('kids') === -1 ? false : true) : false,
    checkbox7: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('pets') === -1 ? false : true) : false,
    checkbox8: PointStoreTagsData.common_tag ? (PointStoreTagsData.common_tag.indexOf('_24h') === -1 ? false : true) : false,
  })

  
  return (
    <CheckBox>
      <p>{title}</p>
      <div>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox1"
            checked={checkdState.value.checkbox1} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox1: !checkdState.value.checkbox1})
              if(checkdState.value.checkbox1 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "dt"])
              } else if(checkdState.value.checkbox1 === true){
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "dt"))
              }
            }} 
          />
          <label htmlFor="checkbox1">
            <div>
              <img alt="" src={checkdState.value.checkbox1 ? storeProperty_1_true : storeProperty_1} />
            </div>
            <p>영업중</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox2"
            checked={checkdState.value.checkbox2} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox2: !checkdState.value.checkbox2})
              if(checkdState.value.checkbox2 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "patio"])
              } else if(checkdState.value.checkbox2 === true){
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "patio"))
              }
            }} 
          />
          <label htmlFor="checkbox2">
            <div>
              <img alt="" src={checkdState.value.checkbox2 ? storeProperty_2_true : storeProperty_2} />
            </div>
            <p>주문가능</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox3"
            checked={checkdState.value.checkbox3} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox3: !checkdState.value.checkbox3})
              if(checkdState.value.checkbox3 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "parking"])
              } else if(checkdState.value.checkbox3 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "parking"))
              }
            }} 
          />
          <label htmlFor="checkbox3">
            <div>
              <img alt="" src={checkdState.value.checkbox3 ? storeProperty_3_true : storeProperty_3} />
            </div>
            <p>주차장</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox4"
            checked={checkdState.value.checkbox4} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox4: !checkdState.value.checkbox4})
              if(checkdState.value.checkbox4 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "wc"])
              } else if(checkdState.value.checkbox4 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "wc"))
              }
            }} 
          />
          <label htmlFor="checkbox4">
            <div>
              <img alt="" src={checkdState.value.checkbox4 ? storeProperty_4_true : storeProperty_4} />
            </div>
            <p>화장실</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox5"
            checked={checkdState.value.checkbox5} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox5: !checkdState.value.checkbox5})
              if(checkdState.value.checkbox5 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "smoke"])
              } else if(checkdState.value.checkbox5 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "smoke"))
              }
            }} 
          />
          <label htmlFor="checkbox5">
            <div>
              <img alt="" src={checkdState.value.checkbox5 ? storeProperty_5_true : storeProperty_5} />
            </div>
            <p>흡연실</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox6"
            checked={checkdState.value.checkbox6} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox6: !checkdState.value.checkbox6})
              if(checkdState.value.checkbox6 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "kids"])
              } else if(checkdState.value.checkbox6 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "kids"))
              }
            }} 
          />
          <label htmlFor="checkbox6">
            <div>
              <img alt="" src={checkdState.value.checkbox6 ? storeProperty_6_true : storeProperty_6} />
            </div>
            <p>키즈존</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox7"
            checked={checkdState.value.checkbox7} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox7: !checkdState.value.checkbox7})
              if(checkdState.value.checkbox7 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "pets"])
              } else if(checkdState.value.checkbox7 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "pets"))
              }
            }} 
          />
          <label htmlFor="checkbox7">
            <div>
              <img alt="" src={checkdState.value.checkbox7 ? storeProperty_7_true : storeProperty_7} />
            </div>
            <p>애견 동반가능</p>
          </label>
        </CheckInput>
        <CheckInput>
          <input 
            type="checkbox" 
            id="checkbox8"
            checked={checkdState.value.checkbox8} 
            onChange={(e) => {
              checkdState.setValue({...checkdState.value, checkbox8: !checkdState.value.checkbox8})
              if(checkdState.value.checkbox8 === false) {
                checkdCommonData.setValue([...checkdCommonData.value, "_24h"])
              } else if(checkdState.value.checkbox8 === true) {
                checkdCommonData.setValue(checkdCommonData.value.filter(checkd => checkd !== "_24h"))
              }
            }} 
          />
          <label htmlFor="checkbox8">
            <div>
              <img alt="" src={checkdState.value.checkbox8 ? storeProperty_8_true : storeProperty_8} />
            </div>
            <p>24시간 영업</p>
          </label>
        </CheckInput>
      </div>
    </CheckBox>
  )
}