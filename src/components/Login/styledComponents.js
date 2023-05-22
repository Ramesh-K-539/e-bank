import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #152850;
  padding: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  height: 79vh;
  width: 70%;
  background-color: #152850;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`

export const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #e0eefe;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  height: 75%;
  width: 75%;
`
export const Form = styled.form`
  height: 100%;
  width: 50%;
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
`

export const Heading = styled.h1`
  color: #183b56;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
  align-self: flex-start;
  margin-bottom: 0px;
`
export const Label = styled.label`
  color: #5a7184;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  align-self: flex-start;
  margin-top: 25px;
  margin-bottom: 0px;
`
export const Input = styled.input`
  height: 40px;
  width: 90%;
  border: 1px solid #5a7184;
  border-radius: 5px;
  background-color: transparent;
  color: #5a7184;
  padding: 15px;
  margin-top: 15px;
`

export const Button = styled.button`
  height: 40px;
  width: 90%;
  background-color: #1565d8;
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 17px;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  align-self: center;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
