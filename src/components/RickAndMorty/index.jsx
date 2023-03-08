import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './index.css'
import { Outlet } from "react-router-dom";

const RickAndMorty = ()=>{
    const [character, setCharacter]= useState([])
    const [count, setCount] = useState(1)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
            const data = await response.json()
            const all = data.results
            console.log(all)
            setCharacter(all)
        }
        fetchData()
    }, [count])
    return(
        <div>
            <h1>RickAnd Morty</h1>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
            <div className="outlet">
                <Outlet />
            </div>

            {character.map((character)=>{
                return(
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image}></img>

                        <Link to={`/${character.id}`} state={character}>
                            Link to {character.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default RickAndMorty