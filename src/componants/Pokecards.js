import React, {useEffect, useState} from 'react';
import "../styles/Pokemons.css"

function Pokecard({pokemonToPokecard}) {
    const [pokemonDonnees, setPokemonDonnees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(pokemonToPokecard)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch pokemon");
                return res.json();
            })
            .then((pokemonDonnees) => {
                setPokemonDonnees(
                    pokemonDonnees
                );
            })
    }, [pokemonToPokecard]);

    let imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDonnees.id}.png`;

    return (
        <div className="pokecard">
            <div className="card-header">
                <h2>{pokemonDonnees.name}</h2>
                <img src={imgPokemon} alt=""/>
            </div>
            <div className="card-body">
                <p>
                    Type : {pokemonDonnees.types?.map((type) => type.type.name).join(', ')}
                </p>
                <p>Weight : {pokemonDonnees.weight}</p>
                <p>Height : {pokemonDonnees.height}</p>

                <div className="stats">
                    {pokemonDonnees.stats?.map((stat) => (
                        <p key={stat.stat.name}>
                            {stat.stat.name}: {stat.base_stat}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pokecard;