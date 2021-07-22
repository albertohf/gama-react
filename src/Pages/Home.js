import { React, useState } from 'react'
import axios from 'axios'

import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.map(item => repositoriesName.push(item.name))
        localStorage.setItem('RepoName', JSON.stringify(repositoriesName))
        setErro(false)
        history.push('/repo')
      })
      .catch(err => {
        setErro(true)
      })
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          placeholder="usuario"
          type="text"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente Novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  )
}

export default Home
