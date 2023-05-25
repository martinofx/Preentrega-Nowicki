import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Mi Aplicación React</h1>
      <ItemListContainer greeting="¡Bienvenido a mi tienda en línea!" />
      {/* Add Things */}
    </div>
  );
};



export default App;