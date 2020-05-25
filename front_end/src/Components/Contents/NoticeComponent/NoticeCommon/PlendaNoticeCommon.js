import React from 'react';
import styled from 'styled-components';
import List from '../../../../Common/List/List';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import useInput from '../../../../Common/Hooks/useInput';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 20px 20px 20px;
`

const PagingBox = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .MuiPaginationItem-page.Mui-selected{
    background-color: #455571;
    color: white;
  }

  & .MuiPaginationItem-page.Mui-selected:hover {
    background-color: #455571;
  }
`

const plendaNoticeData = [
  {
    title: "결재시스템 점검안내1",
    writer: "플렌다",
    date: new Date()
  },
  {
    title: "결재시스템 점검안내2 매장 내 안전점검 관련 안내",
    writer: "플렌다",
    date: new Date()
  },
  {
    title: "결재시스템 점검안내3",
    writer: "플렌다",
    date: new Date()
  },
  {
    title: "결재시스템 점검안내4",
    writer: "플렌다",
    date: new Date()
  },
  {
    title: "결재시스템 점검안내5",
    writer: "플렌다",
    date: new Date()
  },
  {
    title: "결재시스템 점검안내6",
    writer: "플렌다",
    date: new Date()
  }
]

export default () => {
  const pageNum = useInput(0);

  return (
    <ContentsBox>
      <List
        list={{
          title: "",
          data: plendaNoticeData,
          category: [
            {
              type: "title",
              title: "제목",
              data: "title",
              width: "70%",
              minwidth: 240
            },
            {
              type: "text",
              title: "작성자",
              data: "writer",
              width: "15%",
              minwidth: 120
            },
            {
              type: "date",
              title: "날짜",
              data: "date",
              width: "15%",
              minwidth: 120
            }
          ]
        }}
      />
      <PagingBox>
        <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
          <Route>
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const page = parseInt(query.get('page') || '1', 10);
              pageNum.setValue(page)
              return (
                <Pagination
                  page={page}
                  color="#999"
                  // count={plendaNoticeData.length / 10}
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                      {...item}
                    />
                  )}
                />
              );
            }}
          </Route>
        </MemoryRouter>
      </PagingBox>
    </ContentsBox>
  )
}