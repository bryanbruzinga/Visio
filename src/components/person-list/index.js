import React from "react";
import PersonItem from "../person-item";
import styles from "./styles.module.css";

const PersonList = () => {
  return (
    <ul className={styles.listaItem}>
      <PersonItem />
    </ul>
  );
};

export default PersonList;
