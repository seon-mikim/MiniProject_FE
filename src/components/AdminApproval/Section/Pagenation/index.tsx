import React from 'react';
import * as S from './style';
import { PagenationProps, Props } from '../../../../interface/Admin';


function Pagenation({ handleSetPage, pageTotalNumber, currentPageNumber }: PagenationProps) {
  const totalPages = pageTotalNumber ? Math.ceil(pageTotalNumber / 6) : 0;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  
  return (
    <div>
      {pageNumbers.length !== 0 && (
        <S.PageNumber onClick={(e) => handleSetPage?.(Number((e.target as HTMLLIElement).textContent))}>
          {pageNumbers.map((pageNumber) => (
            <li>{pageNumber}</li>
          ))}
        </S.PageNumber>
      )}
    </div>
  );
}

export default Pagenation;
