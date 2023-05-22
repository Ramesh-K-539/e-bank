import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import {
  HomeContainer,
  NavBar,
  Logo,
  LogOutBtn,
  Div,
  Heading,
} from './styledComponents'

const Home = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HomeContainer>
      <NavBar>
        <Logo
          height="50"
          width="110"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogOutBtn type="button" onClick={onClickLogout}>
          Logout
        </LogOutBtn>
      </NavBar>
      <Div>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <Logo
          height="400"
          width="700"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </Div>
    </HomeContainer>
  )
}

export default withRouter(Home)
