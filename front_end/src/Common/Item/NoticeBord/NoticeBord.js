import React from 'react';
import styled from 'styled-components';
import List from '../../List/List';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px 20px 20px;
`

const PagingBox = styled.div`
  padding: 10px 0;
  padding-top: 30px;
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

const Button = styled.div`
  margin-left: auto;
  margin-top: 15px;
  margin-right: 10px;
  margin-bottom: 5px;
  width: 100px;
  height: 32px;
  background: #1DE6BA;
  border-radius: 4px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > p {
      font-size: 14px;
      color: #253245;
    }
  }
`

export default ({ data, category, link, page=true, button }) => {

  return (
    <ContentsBox>
      <List
        list={{
          data: data,
          category: category,
          link: link
        }}
      />
      {page &&
        <PagingBox>
          <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
            <Route>
              {({ location }) => {
                const query = new URLSearchParams(location.search);
                const page = parseInt(query.get('page') || '1', 10);
                // pageNum.setValue(page)
                return (
                  <Pagination
                    page={page}
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
      }
      {
        button && 
          <Button onClick={button.onClick}>
            <Link to={button.link}>
              <p>{ button.text ? button.text : "수정" }</p>
            </Link>
          </Button>
      }
    </ContentsBox>
  )
}