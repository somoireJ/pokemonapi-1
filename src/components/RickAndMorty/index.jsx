import { useState, useEffect } from "react"


const RickAndMorty = ()=>{
    const [character, setCharacter]= useState([])


    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const results = await response.json()
            setCharacter(results.results)
        }
        fetchData()
    }, [])
    return(
        <div>
            <h1>RickAnd Morty</h1>
            {character.map((character)=>{
                return(
                    <div>
                        <h2>{character.name}</h2>
                        <img src={character.image}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default RickAndMorty