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
  const location = useLocation()
 
  const currentPage = pageSeparationData.filter((e) => e.name === location.pathname)

  const [opacity, setOpacity] = useState(0)

  return (
    <nav>
      <S.navDiv opacity={opacity}>
        <div>
          <S.flexDiv opacity={opacity}>
            <S.menuButtonDiv opacity={opacity} onClick={() => setOpacity(1)}><AiOutlineMenu color='white' size='2rem' /></S.menuButtonDiv>
            <S.titleSpan opacity={opacity}>{currentPage[0].title}</S.titleSpan>
            <S.arrowDiv opacity={opacity} onClick={() => setOpacity(0)}><MdArrowBackIosNew/></S.arrowDiv>
          </S.flexDiv>
          {currentPage[0].isUser ? <User opacity={opacity} /> : <Admin opacity={opacity} />}
        </div>
        <S.flexColumnDiv opacity={opacity}>
          <img src={Logo} />
          <LogoutButton opacity={opacity}/>
          <S.flexButtonDiv opacity={opacity}>
            <a href='https://github.com/MiniTeam6' target='_blank'><AiFillGithub size='3rem' color='white'/></a>
            <S.introButton opacity={opacity}><RiTeamLine size='2rem' color='#452E27'/></S.introButton>
          </S.flexButtonDiv>
        </S.flexColumnDiv>
      </S.navDiv>
    </nav>
  )
}

export default Nav