import { createContext, useContext, useState } from "react";
import travelersArray from "../data/travelersArray";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [travelers] = useState(travelersArray);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTravelers = travelers.filter((t) =>
    t.cognome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <GlobalContext.Provider value={{ filteredTravelers, setSearchTerm, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider };