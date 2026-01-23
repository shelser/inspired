import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router';

// import LeftArrowSVG  from '../../assets/leftArrow.svg?react';
// import RightArrowSVG  from '../../assets/rightArrow.svg?react';
// import setPage from '../../features/goodsSlice';

import s from './Pagination.module.scss';




export const Pagination = () => {
  const [pagePagination, setPagePagination] = useState('');
  const pathname = useLocation().pathname;
  const {page, pages} = useSelector(state => state.goods);


  useEffect(() => {
    setPagePagination(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    setPagePagination(newPage);
  };

  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };

  const handleNextPage = () => {
    
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = (pagePagination === pages) && (pages >= 3)
      ? pagePagination -2 : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            to={`${pathname}?page=${i}`}
            className={cn(s.link, i === pagePagination && s.linkActive)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }
    
    return paginationItems;
  };


  return (
    pages> 1 &&
    <div className={s.pagination}>
      <button 
        type="button"
        className={s.arrow} 
        onClick={handlePrevPage}
        disabled={pagePagination <= 2}
      >
        {/* <LeftArrowSVG /> */}
        &lt;
      </button>
      <ul className={s.list}>{renderPaginationItems()}</ul>
      <button 
        type="button"
        className={s.arrow} 
        onClick={handleNextPage}
        disabled={pagePagination >= pages -1 || pages <= 3}
      >
        {/* <RightArrowSVG /> */}
        &gt;
      </button>
    </div>
  );
};
