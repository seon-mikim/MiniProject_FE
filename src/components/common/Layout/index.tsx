import Header from './Header'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

function Layout() {
  return (
    <S.gridDiv>
      <Header/>
      <Nav/>
      <Outlet/>
    </S.gridDiv>
  )
}

export default Layout