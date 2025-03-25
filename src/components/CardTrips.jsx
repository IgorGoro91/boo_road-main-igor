import { Link, useLocation } from "react-router-dom";

export default function CardTravel({ trips }) {
  const location = useLocation();
 
  // Controlla se siamo su una pagina dettaglio
  const isDetailPage = location.pathname.startsWith("/travel/");

  return trips.map((t) => {
    const cardContent = (
      <div className="card">
        <img src={t.image} className="card-img-top" alt="Travel" />
        <div className="card-body">
          <h5 className="card-title">{t.nomeCitta}</h5>
          <p className="card-text">{t.descrizione}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Data Inizio: {t.dataInizio}</strong>
            </li>
            <li className="list-group-item">
              <strong>Data Fine: {t.dataFine}</strong>
            </li>
            <li className="list-group-item">
              <strong>Prezzo: {t.prezzo}€</strong>
            </li>
          </ul>
        </div>
      </div>
    );

    // Se siamo nella pagina dettaglio mostra card senza <Link>
    if (isDetailPage) {
      return (
        <div key={t.id} className="col-md-4 mb-4">
          {cardContent}
        </div>
      );
    }

    // Altrimenti, rendiamo la card cliccabile con <Link>
    return (
      <div key={t.id} className="col-md-4 mb-4">
        <Link to={`/travel/${t.id}`} >
          {cardContent}
        </Link>
      </div>
    );
  });
}
