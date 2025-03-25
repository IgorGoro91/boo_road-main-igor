import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function SearchBar() {
  const { setSearchTerm, handleSubmit } = useGlobalContext();
  const location = useLocation();

  if (location.pathname === "/partecipants") {
    return (
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cerca un partecipante..."
          className="form-control custom-input mx-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-danger p-2" type="submit">
          Cerca
        </button>
      </form>
    );
  }
  return null;
}