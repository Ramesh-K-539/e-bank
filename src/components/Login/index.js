import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  LoginContainer,
  ImgContainer,
  Img,
  Form,
  Heading,
  Label,
  Input,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: undefined,
    pin: undefined,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePassword = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {userId, pin} = this.state
    if (userId === 142420 && pin === undefined) {
      this.setState({showSubmitError: true, errorMsg: 'Invalid PIN'})
    } else {
      const userDetails = {userId, pin}
      const url = 'https://apis.ccbp.in/ebank/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)

      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    }
  }

  render() {
    const {showSubmitError, errorMsg, userId, pin} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <LoginContainer>
          <ImgContainer>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </ImgContainer>
          <Form onSubmit={this.submitForm}>
            <Heading>Welcome Back</Heading>
            <Label htmlFor="UserId">User ID</Label>
            <Input
              id="UserId"
              type="number"
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
              value={userId}
            />
            <Label htmlFor="Pin">PIN</Label>
            <Input
              id="Pin"
              type="password"
              placeholder="Enter PIN"
              onChange={this.onChangePassword}
              value={pin}
            />
            <Button type="submit">Login</Button>
            {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </Form>
        </LoginContainer>
      </AppContainer>
    )
  }
}

export default Login
