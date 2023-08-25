import React, { useCallback, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { styled } from "styled-components";

const CustomPagination = ({ page, setPage, numOfPages = 10 }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numOfPages / 9); i++) {
    pageNumbers.push(i);
  }

  const selectPageHandler = useCallback((selectedPage) => {
    if (selectedPage >= 1 && selectedPage !== page) setPage(selectedPage);
    window.scroll(0, 0);
  }, [page, setPage]);

  useEffect(() => {
    selectPageHandler();
  }, [numOfPages, page, selectPageHandler]);

  return (
    <Wrapper className=" flex justify-center items-center pointer">
      <div
        className={page > 1 ? "prev page-numbers" : "hidden prev page-numbers"}
        onClick={() => selectPageHandler(page - 1)}
      >
        <GrPrevious className=" text-xl" />
      </div>
      <ul className="flex justify-center items-center cursor-pointer">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => selectPageHandler(number)}
            className={page === number ? "active text-xl" : "text-xl"}
          >
            <span>{number}</span>
          </li>
        ))}
      </ul>
      <div
        className={
          page < Math.ceil(numOfPages / 9)
            ? "next page-numbers"
            : " hidden next page-numbers"
        }
        onClick={() => selectPageHandler(page + 1)}
      >
        <GrNext className=" text-xl" />
      </div>
    </Wrapper>
  );
};

export default CustomPagination;

const Wrapper = styled.div`
  .page-numbers {
    margin: 0 2px 2px 2px;
    text-align: center;
    padding: 14px 19px 15px 19px;
    line-height: 1;
    background: rgba(0, 0, 0, 0.09);
    color: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    font-weight: 600;
  }
  ul {
    li {
      display: inline-block;
      margin: 0 2px 2px 2px;
      text-align: center;
      padding: 14px 19px 15px 19px;
      line-height: 1;
      background: rgba(0, 0, 0, 0.09);
      color: rgba(0, 0, 0, 0.6);
      border-radius: 3px;
      font-weight: 600;
    }
    li.active {
      background-color: orange;
    }
  }
`;
