import {useEffect, useState} from 'react'
import { getPokemon } from '../helpers/getPokemon'

export const useFetchPokemon = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        pokemon: [],
        loading: true
    });

    useEffect(() =>{
         setTimeout(() =>{
            let pokemon = getPokemon(valorBusqueda)
            setEstado({
                pokemon: pokemon,
                loading: false
            });
         }, 5)
    }, [valorBusqueda])

    return estado;
  
}
