import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-color: #161625;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CowinTextContainer = styled.div`
  padding-top: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 13px;
`

export const TextContent = styled.p`
  color: #2cc6c6;
  font-family: 'Open sans';
  font-size: 19px;
  font-weight: bold;
`

export const Heading = styled.h1`
  color: #cbd5e1;
  font-family: 'Open sans';
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 50%;
  margin: 10px;
`

export const FailureText = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  line-height: 1.4;
  text-align: center;
`
