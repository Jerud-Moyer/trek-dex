import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddCharacter from '../characters/AddCharacter'
import CharacterList from '../characters/CharacterList'
import { useCharacters } from '../hooks/characters'
import './AdminPage.css';

const AdminPage: React.FC = () => {
  
const { loading, characters } = useCharacters();

if(loading) return <h1 className='loading-message'>...Nomad Loading!</h1>;





  return (
    <div>
      <AddCharacter />
      <CharacterList 
        forAdmin 
        passedCharacters={characters}
      />
      <nav>
        <Link to={'/'}>home</Link>
      </nav>
    </div>
  )
}

export default AdminPage
