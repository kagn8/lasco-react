import { useSearchParams } from "react-router-dom";
import "./assets/element.css";

import LibrerieDB from "./librerie";

function Prodotto() {



let id = window.location.pathname.replace("/element/", "");

let libreria = LibrerieDB.filter(l => l.id == id)[0];

  return (
    <div>
        <h1>titolo</h1>
       <h1>{libreria.nome}</h1>
    
    </div>
  )}


export default Prodotto;
