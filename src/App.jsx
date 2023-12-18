import React, { useState } from 'react'
import './App.css'

function App() {

  const [nome, setNome] = useState('')

  function armazenar(valor) {
    let searchArmazenarArray = JSON.parse(
      localStorage.getItem('searchArmazenar') || '[]'
    )
    let searchArmazenar = {
      nome: valor
    }
    if (valor.length != 0) {
      searchArmazenarArray.push(searchArmazenar)

      document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + valor + "<br/><hr/>")

    }
    localStorage.setItem('searchArmazenar', JSON.stringify(searchArmazenarArray))
  }
  // function consultar(valor) {
  //   alert(localStorage.getItem(valor))
  // }

  // function apagar(valor) {
  //   localStorage.removeItem(valor)
  // }

  return (
    <>
      <label>Digitar Nome </label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => armazenar(nome)}>Gravar</button> <br /><br />
      {/* <button onClick={() => consultar('ls_nome')}>Consultar</button>
      <button onClick={() => apagar('ls_nome')}>Remover</button> <br /><br /><br /> */}

      <span id='conteudo'> </span>

    </>
  )
}

export default App
