import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './component/header';
import Home from './component/home';
import Prodotto from './component/prodotto';
import Abs from './component/abs';
// import Element from './component/element';

function App() {

  return (
    <BrowserRouter>
    <div className="app">

    <Header />
    <Abs />


    
    {/* <Home /> */}
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/element/:id" element={<Prodotto />}/>
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
