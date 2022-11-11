import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Agregarproducto from './components/Agregarproducto';
import { Carrito } from './components/Carrito';
import Ventas from './components/Ventas';
import { ProductDetails } from './components/products/ProductDetails';
import { Dashboard } from './components/admin/Dashboard';
import { ProductsList } from './components/admin/ProductsList';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Agregarproducto" element={<Agregarproducto />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Ventas" element={<Ventas />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/listaProductos" element={<ProductsList />}/>
            <Route path="/search/:keyword" element={<Home />}/>
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
