import React, { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.module.css';

interface Character {
  id: number;
  name: string;
  imageUrl: string;
}

type Props = {
  forAdmin: boolean;
  passedCharacters: Character[];
}

const CharacterList: React.FC<Props> = ({ forAdmin, passedCharacters }) => {
  
  const [characters, setCharacters] = useState<Character[]>([]);


  useEffect(() => {
    setCharacters(passedCharacters);
  }, [passedCharacters]);
  

  const characterElements = characters ? characters.map(character => (
    <li 
      key={character.id}
      className={styles.characterBox}
      >
      <CharacterItem forAdmin={forAdmin} {...character} />
    </li>
  ))
  : null
  

return (
    <div className={styles.listBox} >
      <ul>
        {characterElements}
      </ul>
    </div>
  )
}

export default CharacterList
