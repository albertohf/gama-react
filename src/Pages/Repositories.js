import { React, useEffect, useState } from 'react'
import * as S from './styled'
import { Link, useHistory } from 'react-router-dom'

export default function Repositories() {
  const history = useHistory()
  const [itens, setItens] = useState([])
  useEffect(() => {
    let repositoriesName = localStorage.getItem('RepoName')
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName)
      setItens(repositoriesName)
      localStorage.clear()
    } else {
      history.push('/')
    }
  }, [])
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {itens.map(i => {
          return <S.ListItem>Repositórios: {i}</S.ListItem>
        })}
      </S.List>
      <Link to="/">Voltar</Link>
    </S.Container>
  )
}
