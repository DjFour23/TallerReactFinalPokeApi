import React, { useEffect, useState } from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import PokemonItem from './PokemonItem';
import {firebase} from '../firebase'

export const PokemonContenedor = ({valorBusqueda}) => {
  const {pokemon, cargando} = useFetchPokemon(valorBusqueda);
  const [dataPokemon, setDataPokemon] = useState([])

  useEffect(()=>{
    const obtenerDatos = async () =>{
        try{
            const db = firebase.firestore()
            const data = await db.collection('pokemon').get()
            const array = data.docs.map(item =>(
                {
                    id:item.id, ...item.data()
                }
            ))
            setDataPokemon(array)

        }catch(error){
            console.log(error)
        }
    }
    obtenerDatos()
  }, [dataPokemon])
  return (
        <>
            {cargando && <p className='animate__animated animate__bounce'>Cargando uwu</p>}
            <div className='card-grid'>
            {
                  <PokemonItem
                  key={pokemon.id}
                  title = {pokemon.name}
                  url = {pokemon.url}/>
            }
               
            </div>
        </>
  )
}