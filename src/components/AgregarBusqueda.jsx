
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
            const agregarPokeon = {
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
            await db.collection('pokemon').add(agregarPokeon)
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
            <center>
            <div class="card" style={{width: '18rem'}}>
                <img src="https://miro.medium.com/max/1400/1*lXH0CroMTAQKIfDzn-brPw.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <form onSubmit={buscar}>
                        <p>Descubra su pokémon :D</p>
                        <input 
                            type="text" 
                            placeholder="Ingrese ID del Pokemon" 
                            value = {valorBusqueda}
                            onChange={cambiarValorBusqueda}
                            required
                        />
                    </form>
                </div>
            </div>
            </center>
        </>
    );
}
