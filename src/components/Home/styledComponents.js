import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #152850;
`
export const NavBar = styled.nav`
  height: 90px;
  width: 100%;
  background-color: #152850;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 110px;
  padding-right: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
export const LogOutBtn = styled.button`
  height: 37px;
  width: 100px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'roboto';
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const Div = styled.div`
  height: 87vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 58px;
  font-weight: 600;
  font-family: 'roboto';
`
