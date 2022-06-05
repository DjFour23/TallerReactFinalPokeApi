import React, { useState } from 'react'
import { PokemonContenedor } from './PokemonContenedor';
import { AgregarBusqueda } from './AgregarBusqueda';

const PokemonApp = () => {
  const [categoriasBusqueda, setCategoriasBusqueda] = useState(['']);
  return (
    <div className="App">
        <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda}/>
        <ol>
        {
            categoriasBusqueda.map(categoriaBusqueda => (
                <PokemonContenedor
                    key = {categoriaBusqueda} 
                    valorBusqueda={categoriaBusqueda}
                />
            ))
        }
        </ol>
    </div>
  );
}

export default PokemonApp;