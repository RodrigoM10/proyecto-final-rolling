import React, { useState } from 'react'
import './paginationStore.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


export const PaginationStore = ({currentPage,setCurrentPage,pages}) => {

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  

    // Render to number pages
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
        scrollToTop();
      }
      const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? "pagination-number current-number" : "pagination-number"}>{number}</li>
          );
        } else {
          return null;
        }
      });

    // Next Button
    const handleNextbtn = () => {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
      scrollToTop();
    };
    // Prev Button
    const handlePrevbtn = () => {
      setCurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
      scrollToTop();
  
    };
  
    // 3 dots 
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    const scrollToTop = () => {
        window.scrollTo(0, 250);
      };
      
    return (
        <div>
        <ul className="pagination align-items-center">
          <button 
          onClick={handlePrevbtn}
          className="pagination-arrow arrow-left mx-2"
          disabled={currentPage === pages[0] ? true : false}
          >
            <AiOutlineLeft className="mb-1" />
          </button>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <button 
          onClick={handleNextbtn} 
          className="pagination-arrow arrow-right mx-2"
          disabled={currentPage === pages[pages.length - 1] ? true : false}>
            <AiOutlineRight className="mb-1" />
          </button>
        </ul>
      </div>
    )
}
