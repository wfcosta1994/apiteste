import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  // 1 - Pegar informação quando dar um refresh na tela. Sol: useEffect
  // 2 - Disponibilizar informações no html(reactjs)

  // Roda o bloco de código a partir da mudança de alguma variável
  useEffect(() => {
    const nomesLocalStorage = JSON.parse(
      localStorage.getItem("searchArmazenar")
    );

    if (nomesLocalStorage?.length > 0) setNomes(nomesLocalStorage);
  }, []);

  useEffect(() => {
    if (nomes?.length > 0)
      localStorage.setItem("searchArmazenar", JSON.stringify(nomes));
  }, [nomes]);

  function armazenar(valor) {
    let searchArmazenar = {
      nome: valor,
    };

    if (valor.length != 0) {
      setNomes((prev) => {
        return [...prev, searchArmazenar];
      });
    }
  }

  return (
    <>
      <label>Digitar Nome </label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={() => armazenar(nome)}>Gravar</button> <br />
      <br />
      {/* <button onClick={() => consultar('ls_nome')}>Consultar</button>
      <button onClick={() => apagar('ls_nome')}>Remover</button> <br /><br /><br /> */}
      <span id="conteudo">
        {nomes?.length > 0 &&
          nomes?.map((item, index) => {
            return <h1 key={index}>{item.nome}</h1>;
          })}
      </span>
    </>
  );
}

export default App;
