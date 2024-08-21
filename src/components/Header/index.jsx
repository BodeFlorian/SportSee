import styled from 'styled-components'
import logo from './../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.div`
  padding: 16px 258px 16px 32px;
  background-color: #020203;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Logo = styled.img`
  width: 200px;
  object-fit: cover;
`

const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
`

function Header() {
  return (
    <StyledHeader>
      <ul>
        <li>
          <NavLink to="/">
            <Logo src={logo} alt="SportSee Logo" />
          </NavLink>
        </li>
        <li>
          <StyledLink to="/">Accueil</StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">Profil</StyledLink>
        </li>
        <li>
          <StyledLink to="/setting">Réglage</StyledLink>
        </li>
        <li>
          <StyledLink to="/community">Communauté</StyledLink>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
