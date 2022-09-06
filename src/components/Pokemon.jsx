import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemons, setPokemonList] = useState([]);

    const getData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => setPokemonList(response.data.results))
        .catch(err => console.log(err))
    };

    
    return (
        <div className='list'>
            <div className='btn'>
            <input onClick={getData} type="submit" value="Fetch Pokemon"></input>
            </div>
            <div className='poke_list'>
            <ol>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
            </ol>
            </div>
        </div>
    )
}

export default Pokemon;