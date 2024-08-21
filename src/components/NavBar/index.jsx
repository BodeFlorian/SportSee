import { Link } from 'react-router-dom'
import styled from 'styled-components'

import yoga from './../../assets/icon/yoga.png'
import swim from './../../assets/icon/swim.png'
import bicycle from './../../assets/icon/bicycle.png'
import gym from './../../assets/icon/gym.png'

const StyledNavBar = styled.div`
  background-color: #020203;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  gap: 32px;
`

const StyledNavButton = styled(Link)`
  background-color: #fff;
  border-radius: 6px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 55%;
    aspect-ratio: 1;
  }
`

function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavButton to="#">
        <img src={yoga} alt="Yoga" />
      </StyledNavButton>
      <StyledNavButton to="#">
        <img src={swim} alt="Swim" />
      </StyledNavButton>
      <StyledNavButton to="#">
        <img src={bicycle} alt="Bicycle" />
      </StyledNavButton>
      <StyledNavButton to="#">
        <img src={gym} alt="Gym" />
      </StyledNavButton>
    </StyledNavBar>
  )
}

export default NavBar
