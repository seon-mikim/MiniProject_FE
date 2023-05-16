import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { pageSeparationData } from './pageSeparationData';
import User from './Menu/User'
import Admin from './Menu/Admin';
import Logo from '../../../../pantry_logo.svg'
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai'
import { RiTeamLine } from 'react-icons/ri'
import * as S from './style'
import { MdArrowBackIosNew } from 'react-icons/md'
import LogoutButton from '../Button/LogoutButton';
import AlertModal from '../../AlertModal';
import ProjectInfo from './ProjectInfo';

function Nav() {
  const location = useLocation()
 
  const currentPage = pageSeparationData.filter((e) => e.name === location.pathname)

  const [opacity, setOpacity] = useState(0)

  const [isResponseModalOpen, setIsResponseModalOpen] = useState<boolean>(false);

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
          <Link to='/main'><img src={Logo} /></Link>
          <LogoutButton opacity={opacity}/>
          <S.flexButtonDiv opacity={opacity}>
            <a href='https://github.com/MiniTeam6' target='_blank'><AiFillGithub size='3rem' color='white'/></a>
            <S.introButton onClick={() => setIsResponseModalOpen(true)} opacity={opacity}>
              <RiTeamLine size='2rem' color='#452E27'/>
            </S.introButton>
          </S.flexButtonDiv>
        </S.flexColumnDiv>
      </S.navDiv>
      {isResponseModalOpen && (
        <AlertModal onConfirmClick={() => setIsResponseModalOpen(false)} message={<ProjectInfo />} />
      )}
    </nav>
  )
}

export default Nav