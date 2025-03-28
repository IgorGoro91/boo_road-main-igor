import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import travelArray from "../data/travelersArray";

export default function AddTravelersForm({ onAddTraveler }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [traveler, setTraveler] = useState({
    id: travelArray.length + 1,
    nome: "",
    cognome: "",
    dataNascita: "",
    codiceFiscale: "",
    email: "",
    telefono: "",
    indirizzo: "",
    id_travel: parseInt(id),
  });

  const handleChange = (e) => {
    setTraveler({ ...traveler, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTraveler(traveler);

    setTraveler({
      id: travelArray.length + 1,
      nome: "",
      cognome: "",
      dataNascita: "",
      codiceFiscale: "",
      email: "",
      telefono: "",
      indirizzo: "",
      id_travel: parseInt(id),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="traveler-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={traveler.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cognome"
          placeholder="Cognome"
          value={traveler.cognome}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dataNascita"
          value={traveler.dataNascita}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="codiceFiscale"
          placeholder="Codice Fiscale"
          value={traveler.codiceFiscale}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={traveler.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Telefono"
          value={traveler.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="indirizzo"
          placeholder="Indirizzo"
          value={traveler.indirizzo}
          onChange={handleChange}
          required
        />
        <button type="submit">Aggiungi Viaggiatore</button>
      </form>

      <button className="marco" onClick={() => navigate(-1)}>
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
        >
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        <span>Back</span>
      </button>
      <button onClick={() => navigate(-1)}>Indietro</button>
    </>
  );
}
