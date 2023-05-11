import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { pageSeparationData } from './pageSeparationData';
import User from './Menu/User'
import Admin from './Menu/Admin';
import Logo from '../../../../pantry_logo.svg'
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai'
import { RiTeamLine } from 'react-icons/ri'
import * as S from './style'
import { MdArrowBackIosNew } from 'react-icons/md'
import LogoutButton from '../Button/LogoutButton';

function Nav() {
  const location = useLocation();
  console.log(location.pathname)
  const currentPage = pageSeparationData.filter((e) => e.name === location.pathname)
  console.log(currentPage)

  const [opacity, setOpacity] = useState(0)

  const changeOpacity = (opacity: number) => {
    const answer = opacity === 1 ? 0 : 1
    setOpacity(answer)
  }
  console.log(opacity)

  return (
    <nav>
      <S.navDiv opacity={opacity}>
        <div>
          <S.flexDiv opacity={opacity}>
            <S.menuButtonDiv onClick={() => {changeOpacity(opacity)}}><AiOutlineMenu color='white'/></S.menuButtonDiv>
            <S.titleSpan opacity={opacity}>{currentPage[0].title}</S.titleSpan>
            <S.arrowDiv opacity={opacity} onClick={() => setOpacity(0)}><MdArrowBackIosNew/></S.arrowDiv>
          </S.flexDiv>
          {currentPage[0].isUser ? <User opacity={opacity} /> : <Admin opacity={opacity} />}
        </div>
        <S.flexColumnDiv opacity={opacity}>
          <img src={Logo} />
          <LogoutButton />
          <S.flexButtonDiv>
            <a href='https://github.com/MiniTeam6' target='_blank'><AiFillGithub size='3rem' color='white'/></a>
            <S.introButton><RiTeamLine size='2rem' color='#452E27'/></S.introButton>
          </S.flexButtonDiv>
        </S.flexColumnDiv>
      </S.navDiv>
    </nav>
  )
}

export default Nav