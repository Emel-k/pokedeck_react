import React, {useEffect, useState} from 'react';
/*npm install react-data-table-component*/
import DataTable from "react-data-table-component"
import "../styles/Pokemons.css"
import Pokecards from "./Pokecards";

function Pokemon(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [pokemon, setPokemon] = useState(
        "https://pokeapi.co/api/v2/pokemon/1/,"
    )

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => {
                if(!response.ok){
                    throw new Error(`Erreur HTTP: {response.status}`);
                }
                return response.json()
            })
            .then((data) => {
                setData(
                    data.results.map((pokemon) => {
                        pokemon.id = pokemon.url
                            .replace("https://pokeapi.co/api/v2/pokemon/", "")
                        .split(0, -1);

                        pokemon.name =
                            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                        console.log(pokemon)

                        return pokemon
                    })
                )
            })
            .catch((error) => {
                setError((error))
                }
            )
        },
     []);
        if(error) {
            return <div>Erreur de chargement des Pokemons : {error.message}</div>
        }

        //ICi on définie les colonnes de DataTables
    const column = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
            width:"50px"
        },
        {
            name: "name",
            selector: (row) => row.name,
            sortable: true,

        },
        {
            name:"Voir plus",
            cell : (row) => (<button className="showPokemon" onClick={() => setPokemon(row.url)}>Afficher</button> ),
            width: "150px",
        }
    ]
    return (
        <div className={"pokefull"}>
            <div className={"pokemons"}>
                <div>
                    <h1>Pokemons</h1>
                    <DataTable
                        columns={column}
                        data={data}
                        title={"Listes des pokemons"}
                        pagination>
                    </DataTable>
                </div>
                <Pokecards pokemonToPokecards={pokemon}/>
            </div>
        </div>
    );
}

export default Pokemon;