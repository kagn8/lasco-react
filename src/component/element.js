import "./assets/element.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function Element({id, titolo, img, prezzo, descrizione, disponibile}) {

    const [colore, setColore] = useState(null);
    useState(()=>{
        if (disponibile) {
            setColore("green")
        }else setColore("red")
    }, []) 

    const ref = useRef(null);
        
        
      
    useEffect(() => {
      const hoverLibr = () => {
        // element.classList.toggle("libreria-sfondo-hover")
      };
  
      const element = ref.current;
      
      element.addEventListener('mouseover', hoverLibr);
      element.addEventListener('mouseout', hoverLibr);
  
      return () => {
        element.removeEventListener('mouseout', hoverLibr);
        element.removeEventListener('mouseover', hoverLibr);
      };
    }, []);
    
  
    
  return (
    <div className="element" key={id}>
        <div className="libreria-sfondo" ref={ref} style={{backgroundImage:`url(${img})`}} ></div>
        
        <div>
            <Link to={`/element/${id}`}><h4>{titolo}</h4></Link>
            <p>{descrizione}</p>
            <h3>{prezzo}</h3>
            <div className="d-flex">

            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i><p>(1200)</p>
            </div>
            <div className="d-flex">
            <div className="iconcine"><i className=" bi bi-bag-plus"></i></div>
            <div className="iconcine"><i className=" bi bi-heart"></i></div>
            </div>

            <div className="mt-2">
                <p><i className="bi bi-circle-fill" style={{color:colore}}></i> Disponibile per la consegna</p>
                <p><i className="bi bi-circle-fill" style={{color:colore}}></i> Disponibile presso Napoli Afragola</p>
            </div>
            <p className="varianti-p" >Più varianti</p>
            <div className="d-flex">
                <div className="variant" style={{backgroundImage:`url(${img})`}} ></div>
                <div className="variant" style={{backgroundImage:`url(${img})`}} ></div>
                <div className="variant" style={{backgroundImage:`url(${img})`}} ></div>
                <div className="variant" style={{backgroundImage:`url(${img})`}} ></div>
                <div className="variant" style={{backgroundImage:`url(${img})`}} ></div>
            </div>
        </div>

    </div>
  );
}

export default Element;
