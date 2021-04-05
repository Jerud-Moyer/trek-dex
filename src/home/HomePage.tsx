import React from 'react'
import CharacterList from '../characters/CharacterList';
import { useCharacters } from '../hooks/characters'
import './HomePage.css';



const Home: React.FC = () => {

  const { loading, characters } = useCharacters();

  if(loading) return <h1 className='loading-message'>...Nomad Loading</h1>

  return (
    <div>
      <CharacterList forAdmin={false} passedCharacters={characters}/>
    </div>
  )
}

export default Home
