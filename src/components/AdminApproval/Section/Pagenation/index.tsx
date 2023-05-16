import React from 'react';
import * as S from './style';
import { Props } from '../..';

function Pagenation({ handleSetPage, pageTotalNumber }: Props) {
  const totalPages = Math.ceil(pageTotalNumber / 6);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.length !== 0 && (
        <S.PageNumber onClick={(e) => handleSetPage(Number((e.target as HTMLLIElement).textContent))}>
          <li>&lt;</li>
          {pageNumbers.map((pageNumber) => (
            <li>{pageNumber}</li>
          ))}
          <li>&gt;</li>
        </S.PageNumber>
      )}
    </div>
  );
}

export default Pagenation;
