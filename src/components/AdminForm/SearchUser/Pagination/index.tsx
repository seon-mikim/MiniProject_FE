// Pagination.tsx
import React from 'react';
import * as S from './style'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const maxPagesToShow = 5;
  const pages = createPaginationPages(currentPage, totalPages, maxPagesToShow);

  return (
    <>
      {currentPage > 1 && (
        <>
          <S.ArrowButton onClick={() => onPageChange(Math.max(1, currentPage - 10))}>{'<<'}</S.ArrowButton>
          <S.ArrowButton onClick={() => onPageChange(Math.max(1, currentPage - 1))}>{'<'}</S.ArrowButton>
        </>
      )}
      {pages.map((page, index) => {
        if (page === '...') {
          return <S.Dots key={`dots_${index}`}>...</S.Dots>;
        }
        return (
          <S.PageButton
            key={page}
            isActive={page === currentPage}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </S.PageButton>
        );
      })}
      {currentPage < totalPages && (
        <>
          <S.ArrowButton onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>{'>'}</S.ArrowButton>
          <S.ArrowButton onClick={() => onPageChange(Math.min(totalPages, currentPage + 10))}>{'>>'}</S.ArrowButton>
        </>
      )}
    </>
  );
}

const createPaginationPages = (currentPage: number, totalPages: number, maxPagesToShow: number) => {
  const pages: (number | string)[] = [];

  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (startPage > 1) {
    pages.push('...');
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  if (endPage < totalPages) {
    pages.push('...');
  }

  return pages;
};

export default Pagination