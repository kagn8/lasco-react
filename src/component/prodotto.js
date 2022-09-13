import "./assets/prodotto.css";
import Element from "./element";

import LibrerieDB from "./librerie";
import { useRef, useEffect, useState } from "react";

function Prodotto() {


  let id = window.location.pathname.replace("/element/", "");
  let libreria = LibrerieDB.filter((l) => l.id === Number(id))[0];

  document.title = libreria.nome + " " + libreria.descrizione;

  const [colore, setColore] = useState(null);
  useState(() => {
    if (libreria.disponibile) {
      setColore("green");
    } else setColore("red");
  }, []);

  const ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      element.classList.toggle("bi-heart");
      element.classList.toggle("bi-heart-fill");
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="prod-principale">
      <div className="main-prodotto">
        <div className="immagini-main">
          <div className="container">
            <div className="row">
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
            </div>
            <div className="row">
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
            </div>
            <div className="row">
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
            </div>
            <div className="row">
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
              <div
                className="col-6 img-set"
                style={{ backgroundImage: `url(${libreria.img})` }}
              ></div>
               <div className="row bord-el" id="carousel">
        {LibrerieDB.map((l) => {
          return (
            <div className="el" onClick={() => window.location.reload()}>
              <Element
                id={l.id}
                titolo={l.nome}
                img={l.img}
                prezzo={l.prezzo}
                descrizione={l.descrizione}
                disponibile={l.disponibile}
              />
            </div>
          );
        })}
      </div>

            </div>
          </div>
        </div>

        
        
        <div className="dettagli" >
          <div className="d-flex justify-content-between">
            <h3>{libreria.nome}</h3> <h3>{libreria.prezzo}</h3>
          </div>
          <p>{libreria.descrizione}</p>
          <p className="d-flex">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <p>(1200)</p>
          </p>
          <div className="linea"></div>

          <div className="flex-dettagli-testo">
            <div className="scegli-colore">
              <p className="colore">Scegli colore</p>
              <p>Bianco</p>
            </div>
            <i className="bi bi-chevron-right"></i>
          </div>

          <div className="colori-disp">
            <div
              className="img-dettagli"
              style={{ backgroundImage: `url(${libreria.img})` }}
            ></div>
          </div>

          <div className="flex-dettagli-testo mt-4">
            <p className="colore">Come ottenerlo</p>
            <p>Cambia negozio</p>
          </div>

          <div className="dettagli-consegna">
            <div className="diponibilita d-flex">
              <i className="bi bi-car-front me-4"></i>
              <div className="altro">
                <p className="colore">
                  Consegna{" "}
                  <i
                    className="bi bi-circle-fill ms-3"
                    style={{ color: colore }}
                  ></i>
                </p>
                <p>Disponibile per 81025</p>
              </div>
            </div>

            <div className="riga mt-3 mb-3"></div>

            <div className="diponibilita d-flex">
              <i className="bi bi-building me-4"></i>
              <div className="altro">
                <p className="colore">
                  Clicca e Ritira
                  <i
                    className="bi bi-circle-fill ms-3"
                    style={{ color: colore }}
                  ></i>
                </p>
                <p>Disponibile presso IKEA Napoli Afragola</p>
              </div>
            </div>

            <div className="riga mt-3 mb-3"></div>

            <div className="diponibilita d-flex">
              <i className="bi bi-house-door me-4"></i>
              <div className="altro">
                <p className="colore">
                  In negozio{" "}
                  <i
                    className="bi bi-circle-fill ms-3"
                    style={{ color: colore }}
                  ></i>
                </p>
                <p>Disponibile presso IKEA Napoli Afragola</p>
              </div>
            </div>
          </div>

          <div className="flex-dettagli pt-4">
            <p className="aggiungi-al-carrello"> Aggiungi al carrello</p>
            <p className="cuore-dettagli">
              {" "}
              <i ref={ref} className="bi bi-heart"></i>
            </p>
          </div>
        </div>
      </div>

      <p className="descr-prod">
        Abbiamo calcolato che ogni cinque secondi viene venduta una libreria 
         {" " +libreria.nome} in qualche parte del mondo: un grande risultato considerando che è
        stata lanciata nel 1979! Molto amata dai lettori, è un classico che non
        passa mai di moda.
      </p>

     
      <div className="img-desc-prod">
        <div
          className="img-img-desc"
          style={{ backgroundImage: `url(${libreria.img})` }}
        ></div>
        <div className="img-desc-desc">
          <p>Storia</p>
          <h3>Il legno, secondo noi</h3>
          <p>
            I mobili IKEA sono associati al legno più che a qualsiasi altro
            materiale per ottimi motivi. Il legno è rinnovabile, riciclabile e
            resistente. Mantiene il suo fascino nel tempo ed è un elemento
            essenziale della nostra tradizione scandinava. Per questo in IKEA
            crediamo che un suo approvvigionamento responsabile possa dare un
            contributo cruciale per mitigare il cambiamento climatico. Nel 2012
            abbiamo stabilito che avremmo utilizzato del legno ricavato da fonti
            più sostenibili entro il 2020, e siamo felici di annunciare di avere
            raggiunto questo obiettivo. Oggi oltre il 98% del legno usato per i
            prodotti IKEA è riciclato o certificato FSC.
          </p>
          <h4>Le foreste svolgono un ruolo cruciale per la vita sulla Terra</h4>
          <p>
            Le foreste contribuiscono all’equilibrio dell’atmosfera, purificano
            l’aria che respiriamo e fanno parte del ciclo dell’acqua. Inoltre,
            favoriscono la biodiversità della fauna selvatica e accolgono le
            comunità indigene, che traggono il loro sostentamento dalle stesse
            foreste. Il 90% delle specie animali e vegetali presenti sul pianeta
            ha bisogno delle foreste per sopravvivere, poiché fonti di cibo,
            combustibile, legname e altri servizi ecosistemici fondamentali.
            IKEA riceve ogni anno circa 19 milioni di metri cubi di legno grezzo
            da oltre 50 paesi; l’impatto sulle foreste e sull’industria del
            legno è quindi notevole e, in più, ha la grande responsabilità di
            promuovere tecniche di approvvigionamento sostenibili. Con un
            approvvigionamento responsabile del legno e una gestione scrupolosa
            delle fonti, le persone che dipendono dalle foreste possono
            soddisfare le proprie esigenze e le aziende lavorare in modo
            sostenibile. Allo stesso tempo, si garantisce la protezione degli
            ecosistemi forestali e una valorizzazione della biodiversità.
          </p>
        </div>
      </div>

      <div className="info d-flex">
        <div className="container">
          <div className="row">
            <div className="materiale col-6">
              <p>Materiale</p>
              <h2>Cos'è il truciolare</h2>
            </div>
            <div className="desc-materiale col-6">
              <p>
                Il truciolare è un materiale composto da legno riciclato e
                scarti delle segherie: così, anziché essere eliminati, i pezzi
                di legno della tonalità sbagliata, i trucioli e la segatura si
                trasformano in una preziosa risorsa. Usiamo pannelli in
                truciolare per librerie, strutture letto, divani e strutture
                cucina. Per proteggerli dall'usura e dall'umidità, applichiamo
                lacca, impiallacciatura o lamina come finitura dei mobili. Il
                giorno in cui sostituirai il divano o il letto, il materiale del
                truciolare potrà essere riciclato.
              </p>
            </div>
          </div>
        </div>
      </div>

    


      <div className="info d-flex">
        <div className="container">
          <div className="row">
            <div className="materiale col-6">
              <p>Il pensiero del designer</p>
              <h2>Il pensiero del designer</h2>
            </div>
            <div className="desc-materiale col-6">
              <p>
                "Quando mi fu affidato il compito di progettare una soluzione
                semplice, funzionale e intelligente per organizzare i libri non
                immaginavo che la libreria {" " +libreria.nome} avrebbe arredato così tante
                case in tutto il mondo. Ricordo che ero orgoglioso soprattutto
                dei ripiani regolabili e della loro profondità, perfetta per i
                libri. Ho anche avuto per primo l’idea di trasportare la
                libreria in un pacco piatto. {" " +libreria.nome} continua ad essere una delle
                mie preferite e spero che il suo successo prosegua ancora per
                molti anni." Gillis Lundgren (1929-2016), designer
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="footer d-flex">
        <div className="container">
          <div className="row">
            <div className="col-2"><h5>Iscriviti a IKEA Family</h5>
            <div className="aggiungi-al-carrello"> Iscriviti o accedi</div>
            <h6>Entra in IKEA Business Network</h6>
            <div className="aggiungi-al-carrello"> Iscriviti o accedi</div>
            </div>
            <div className="col-2"><h6>Aiuto e contatti</h6>
            
              <p>Servizio clienti</p>
              <p>Servizi di consegna</p>
              <p>Disponibilità prodotti</p>
              <p>cambi e resi</p>
              <p>Supporto prodotti</p>
              <p> Pezzi di ricambio</p>
              <p>Dov'è il mio ordine?</p>
              <p>Montaggio</p>
              <p>Garanzie</p>
              <p>Contattaci</p>
              <p>Raccontaci la tua esperienza</p>
              <p>Avvisi importanti e richiami prodotti</p>
              <p>Tutti i nostri servizi</p>
           
            </div>
            <div className="col-2"><h6>Acquistare in IKEA</h6>
            <p>Planner e configuratori</p>
            <p>Consulenza d'arredo</p>
            <p>Acquistare in Ikea</p>
            <p>Brochure</p>
            <p>I nostri punti vendita</p>
            <p>App Ikea</p>
            <p>Ordini telefonici</p>
            <p>IKEA Family</p>
            <p>Ikea Business Network</p>
            </div>
            <div className="col-2"><h6>Il mio account</h6>
            <p>Profilo/Login</p>
            <p>Il mio profilo IKEA Family</p>
            <p>Lista dei desideri</p>
            </div>
            <div className="col-2"><h6>A proposito di IKEA</h6>
            <p>Lavora con noi</p>
            <p>Questa è IKEA</p>
            <p>La vita in casa</p>
            <p>Una vita sana e sostenibile</p>
            <p>Clima e ambiente</p>
            <p>Impatto sociale</p>
            <p>Sala stampa</p>
            </div>
            
          </div>
        </div>
        </div>
    </div>
  );
}

export default Prodotto;
