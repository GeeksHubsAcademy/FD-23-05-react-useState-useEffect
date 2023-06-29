import { useEffect, useState } from "react"
import CharacterCard from "../../common/CharacterCard/CharacterCard";

const RickCharactersList = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
      .catch((error) => console.log(error)
    )
  }, [])  

  interface CharacterData{
    name:string, image: string, id: string
  }

  return (
    <>
        {characters.map((character: CharacterData) => {
          return (
            <div key={character.id}>
              <CharacterCard name={character.name} image={character.image} />
            </div>
          )
        })}
    </>
  )
}

export default RickCharactersList