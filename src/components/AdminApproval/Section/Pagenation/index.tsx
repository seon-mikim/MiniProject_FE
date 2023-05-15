import React from 'react'
import * as S from './style'

function Pagenation() {
  return (
    <div>
          <S.PageNumber>
            <li>&lt;</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>&gt;</li>
          </S.PageNumber>
    </div>
  )
}

export default Pagenation