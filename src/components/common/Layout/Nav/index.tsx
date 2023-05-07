import React from 'react'
import { useLocation } from 'react-router-dom'
import { pageSeparationData } from './pageSeparationData';
import User from './Menu/User'
import Admin from './Menu/Admin';
import Logo from '../../../../pantry_logo.svg'
import { AiFillGithub } from 'react-icons/ai'
import { RiTeamLine } from 'react-icons/ri'

function Nav() {
  const location = useLocation();
  console.log(location.pathname)
  const currentPage = pageSeparationData.filter((e) => e.name === location.pathname)
  console.log(currentPage)

  return (
    <nav>
      <div>
        <div>
          <span>{currentPage[0].title}</span>
        </div>
        {currentPage[0].isUser ? <User /> : <Admin />}
      </div>
      <div>
        <img src={Logo} />
        <button>로그아웃</button>
        <div>
          <a href='https://github.com/MiniTeam6' target='_blank'><AiFillGithub /></a>
          <button><RiTeamLine /></button>
        </div>
      </div>
    </nav>
  )
}

export default Nav