import React from "react";
import { api } from "../services/api";

export const AppContext = React.createContext();

export function GeneralContent({ children }) {
  const [dados, setDados] = React.useState(null);

  async function puxarDados() {
    const informacoes = await api.get();
    setDados(informacoes.data);
  }

  React.useEffect(() => {
    puxarDados();
  }, []);

  return (
    <AppContext.Provider value={{ dados, setDados }}>
      {children}
    </AppContext.Provider>
  );
}
