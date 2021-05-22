import React from 'react'
import CharacterList from '../characters/CharacterList';
import { useCharacters } from '../hooks/characters'
import Loading from '../Loading/Loading';
import './HomePage.css';



const Home: React.FC = () => {

 
 const { loading, characters } = useCharacters();

  if(loading) return <Loading />

  return (
    <div>
      <CharacterList forAdmin={false} passedCharacters={characters}/>
    </div>
  )
}

export default Home
