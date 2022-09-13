import '../App.css';
import {useRef, useEffect} from 'react';
import { Link } from "react-router-dom";


function Header() {

        
        const ref = useRef(null);
        
        
      
        useEffect(() => {
          const handleClick = () => {
            element.classList.toggle("bi-heart")
            element.classList.toggle("bi-heart-fill")
          };
      
          const element = ref.current;
          
      
          element.addEventListener('click', handleClick);
      
          return () => {
            element.removeEventListener('click', handleClick);
          };
        }, []);

  return (
    <div className='main-header'>
      <div className='black-top '>
        <p><i class="bi bi-bookmark"></i>Scopri tanti nuovi prodotti in sconto</p>
        <p><i class="bi bi-pencil"></i>Consegna a casa a partire da 5 euro</p>
      </div>
    <nav className="header row" >
      <div className="col-1">
        <Link to={`/`}>
        <div className="logo"></div>
        </Link>
      </div>
    

        
        <div className="col-8">
        <input type="text" className="search" />
        </div>

        <div className="col-3">
        <span><i className="bi bi-person"></i> Heij! Accedi o registrati</span>
        <span  > <i ref={ref} className="bi bi-heart" ></i></span>
        <span> <i className="bi bi-basket"></i></span>
        </div>
        
       
    </nav>

    
    <div className="prodotti-ambienti-offerte ">
        <div className="prodotti d-flex">
          <p> Prodotti </p>
          <p> Ambienti </p>
          <p> Offerte </p>
        </div>
        <div className="offerta d-flex">
          <p><i class="bi bi-car-front"></i> 81025</p>
          <p><i class="bi bi-building"></i>Napoli Afragola</p>
        </div>
      </div>
      <div className="servizi">
        <p>Prodotti &gt; Organizzare e contenere &gt; Librerie e scaffali &gt; Librerie</p>
      </div>
      

        
    
    </div>
  );
}

export default Header;
