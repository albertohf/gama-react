import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`
export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`
// Home
export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
`
export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`
