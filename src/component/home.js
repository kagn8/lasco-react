import "./assets/home.css";

import Element from "./element";
import LibrerieDB from "./librerie";



function Home() {
  return (
    
    <div className="home">
   
    
      

      <div className="text-home mb-5">
        <h1>Librerie</h1>

        <p>
          Le nostre librerie sono vere e proprie soluzioni multifunzione:
          possono ospitare tutti i tuoi libri, ma anche mettere in mostra gli
          oggetti di cui ami circondarti e nascondere quelli che non vuoi tenere
          in vista. Per qualsiasi esigenza di spazio e preferenza in fatto di
          materiali, finiture e stile, abbiamo la libreria che fa per te.
        </p>
      </div>

      <div className="filtri">
        <p>Ordina <i class="bi bi-chevron-compact-down"></i></p>
        <p>Misure <i class="bi bi-chevron-compact-down"></i></p>
        <p>Colore <i class="bi bi-chevron-compact-down"></i></p>
        <p>Serie <i class="bi bi-chevron-compact-down"></i></p>
        <p>Ante <i class="bi bi-chevron-compact-down"></i></p>
        <p>Materiale <i class="bi bi-chevron-compact-down"></i></p>
        <p>Prezzo <i class="bi bi-chevron-compact-down"></i></p>
        <p> tutti i filtri <i class="bi bi-funnel"></i></p>
      </div>

      <div className="row bord-el">
        {LibrerieDB.map((l) => {
          return (
            <div className="col-3">
              
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

      <div className="section-1">
        <h2>Categorie collegate</h2>
        <div className="row text-home">
          <div className="collegati col-2">
            <div className="img-collegati"></div>
            <p>Scaffali</p>
          </div>
          <div className="collegati col-2">
            <div className="img-collegati"></div>
            <p>Scaffali</p>
          </div>
          <div className="collegati col-2">
            <div className="img-collegati"></div>
            <p>Scaffali</p>
          </div>
          <div className="collegati col-2">
            <div className="img-collegati"></div>
            <p>Scaffali</p>
          </div>
          
        </div>
      </div>

      <div className="text-home">
        <p>
          La libreria è un elemento fondamentale per l’arredamento della casa,
          non solo per organizzare i libri, ma anche i giochi dei bambini o i
          documenti dell’home office. Le possibilità sono davvero infinite.
          Abbiamo un vasto assortimento di mobili librerie di diverse forme e
          misure. Puoi scegliere tra librerie che si sviluppano in altezza o in
          larghezza, in tanti colori e materiali diversi, come rosso, bianco,
          nero, grigio e diverse tonalità di rovere.
        </p>
        <h3>Valorizza o nascondi</h3>
        <p>
          In base a ciò che dovrà contenere la tua libreria, scegli un mobile
          con ante e cassetti o con ripiani a giorno. Una soluzione a giorno è
          perfetta per esporre libri e fotografie e si può decorare con delle
          piante. Un mobile libreria con ante è l’ideale per la cameretta dei
          bambini, per tenere in ordine i libri di scuola e i giochi. Se hai una
          libreria a giorno, puoi completarla con contenitori, cestini e
          divisori. Naturalmente puoi optare anche per una soluzione mista, con
          ante per nascondere il disordine e sezioni a giorno per valorizzare
          gli oggetti che ami. Scegliendo delle ante a vetro, puoi mettere in
          mostra piatti e bicchieri che usi solo nelle occasioni speciali e, al
          tempo stesso, proteggerli dalla polvere.{" "}
        </p>
        <h3>Librerie che sfruttano ogni centimetro di spazio</h3>
        <p>
          Esiste un mobile libreria per ogni spazio. In IKEA abbiamo un ampio
          assortimento di modelli adatti a ogni ambiente della casa. Ecco alcuni
          consigli per trovare la libreria giusta per te. Un buffet ti offre un
          capiente spazio interno e un ripiano superiore dove esporre i tuoi
          oggetti più belli. Puoi sistemarlo nell’ingresso, sotto una finestra o
          usarlo per appoggiare i piatti da portata vicino alla tavola. Una
          libreria angolare sfrutta al massimo lo spazio sulle pareti. Ma la
          libreria non deve necessariamente essere accostata a una parete. Puoi
          usarla come divisorio collocandola al centro dell’ambiente, con il
          lato corto contro la parete. È un’ottima soluzione per ritagliare un
          piccolo spazio di lavoro o un home office in soggiorno.{" "}
        </p>
        <h3>
          Pareti di materiali diversi richiedono tipi diversi di accessori di
          fissaggio
        </h3>
        <p>
          Molti scaffali e librerie del nostro assortimento devono essere
          fissati alla parete. Ricorda che pareti di materiali diversi
          richiedono tipi diversi di accessori di fissaggio. Leggi le nostre
          istruzioni per il fissaggio alla parete per scoprire come fissare in
          modo sicuro le librerie alle pareti della tua casa.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
