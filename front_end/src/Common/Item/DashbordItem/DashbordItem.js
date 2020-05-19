import React from 'react';
import styled from 'styled-components';
import BordChart from './BordChart';
import BordList from './BordList';
import BordDataBox from './BordDataBox';
import BordHeader from './BordHeader';

const Container = styled.div`
  margin: 0 15px;
  min-width: 300px;
`

const Bord = styled.div`
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

const BordBody = styled.div``

export default ({
  style, 
  minHeight=0,
  bordHeader={
    title: "",
    iconBoxColor: "",
    iconBoxImg: ""
  },
  list={
    title: "",
    data: [],
    category: []
  },
  ContentsData=[],
  chartBoolean=false
}) => {

  return (
    <Container style={style}>
      <Bord style={{minHeight: minHeight}}>
        <BordHeader bordHeader={bordHeader} />
        <BordBody>
          <BordDataBox ContentsData={ContentsData} />
          <BordList list={list} />
          { chartBoolean &&
            <BordChart/>
          }
        </BordBody>
      </Bord>
    </Container>
  )
}