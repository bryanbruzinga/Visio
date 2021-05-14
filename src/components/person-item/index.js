import React from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./styles.module.css";

const PersonItem = () => {
  const { dados, setDados } = React.useContext(AppContext);

  function ordenar() {
    if (dados != null) {
      dados.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
    }
  }

  ordenar();

  function deleteUser(index) {
    const copiaDados = [...dados];
    copiaDados.splice(index, 1);
    setDados(copiaDados);
  }

  if (dados === null) return null;
  return (
    <>
      {dados.map((info, index) => {
        return (
          <li key={index} className={styles.item}>
            <div>
              <span>Nome: {info.name}</span>
              <span>Email: {info.email}</span>
              <span>Fone: {info.phone}</span>
              <span>Web: {info.website}</span>
            </div>
            <button type="button" onClick={() => deleteUser(index)}>
              Excluir
            </button>
          </li>
        );
      })}
    </>
  );
};

export default PersonItem;
