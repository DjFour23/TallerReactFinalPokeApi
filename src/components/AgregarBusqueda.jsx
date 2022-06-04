
import {useState} from 'react'
import {firebase} from '../firebase'
import { getPokemon } from '../helpers/getPokemon'

var pokemon;

export const AgregarBusqueda =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');
    const [setUrl] = useState('');
    const [setNombre] = useState('')
    const [dataPokemon, setDataPokemon] = useState([])

    pokemon = getPokemon(valorBusqueda)
    
    
    const insertar = async () =>{
        
        try {
            const db = firebase.firestore()
            const addPokeon = {
                nombre: pokemon.name,
                url: pokemon.url,
                id: pokemon.id,
            }
            
            setDataPokemon([...dataPokemon,
                {
                    nombre: pokemon.name,
                    url: pokemon.url,
                    id: pokemon.id,
                }
            ])
            
            await db.collection('pokemon').add(addPokeon)

            setNombre('')
            setUrl('')

        } catch (error) {
            console.log(error)
        }
    }


    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        insertar()
    }

    return(
        <>
            <form onSubmit={buscar}>
                <p>Buscar Personaje</p>
                <input 
                    type="text" 
                    placeholder="ID del personaje" 
                    value = {valorBusqueda}
                    onChange={cambiarValorBusqueda}
                />
            </form>
        </>
    );
}
