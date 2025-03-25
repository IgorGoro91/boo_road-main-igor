import { useState } from "react";

export default function CardTravelers({ traveler }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {traveler.map((t, i) => (
        <div key={t.id} className="col-md-4 mb-4">
          <div className="card">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${openIndex === i ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                    data-bs-target={`#${i}`}
                    aria-controls={i}
                  >
                    {t.nome} {t.cognome}
                  </button>
                </h2>
                <div
                  id={i}
                  className={`accordion-collapse collapse ${openIndex === i ? "show" : ""}`} 
                >
                  <div className="accordion-body">
                    <p>
                      <strong>Data di Nascita:</strong> {t.dataNascita}
                    </p>
                    <p>
                      <strong>CF:</strong> {t.codiceFiscale}
                    </p>
                    <p>
                      <strong>Email:</strong> {t.email}
                    </p>
                    <p>
                      <strong>Telefono:</strong> {t.telefono}
                    </p>
                    <p>
                      <strong>Indirizzo:</strong> {t.indirizzo}
                    </p>
                    <p>
                      <strong>Note:</strong> {t.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
