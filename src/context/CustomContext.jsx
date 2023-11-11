import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, isPending, error } = useFetch(url);

  return (
    <GlobalContext.Provider value={{ data, isPending, error, setUrl }}>
      {children}
    </GlobalContext.Provider>
  );
}
