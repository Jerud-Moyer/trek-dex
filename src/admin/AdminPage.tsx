import React from 'react'
import { Link } from 'react-router-dom'
import AddCharacter from '../characters/AddCharacter'
import CharacterList from '../characters/CharacterList'
import { useCharacters } from '../hooks/characters'
import styles from'./AdminPage.module.css';

const AdminPage: React.FC = () => {
  
const { loading, characters } = useCharacters();

if(loading) return <h1 className={styles.loadingMessage}>...Nomad Loading!</h1>;





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
