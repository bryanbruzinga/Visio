import React from "react";
import axios from "axios";
import "./app.css";

function App() {
  const [dados, setDados] = React.useState(null);

  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  async function puxarDados() {
    const informacoes = await axios.get(baseUrl);
    setDados(informacoes.data);
  }

  function deleteUser(index) {
    const copiaDados = [...dados];
    copiaDados.splice(index, 1);
    setDados(copiaDados);
  }

  function ordenar() {
    if (dados != null) {
      dados.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
    }
  }

  ordenar();

  React.useEffect(() => {
    puxarDados();
  }, []);

  return (
    <div className="lista">
      <h1>Lista de Usuários</h1>
      {dados &&
        dados.map((item, index) => (
          <div className="listaItem" key={item.id}>
            <div>
              <span>{item.name}</span>
              <span>{item.username}</span>
              <span>{item.email}</span>
            </div>
            <button type="button" onClick={() => deleteUser(index)}>
              Excluir
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
