import React, { useEffect, useState } from 'react';
import { getCharacters } from '../sevices/trek-dex-api';
import CharacterItem from './CharacterItem';
import './CharacterList.css';

interface Character {
  id: number;
  name: string;
  imageUrl: string;
}

type Props = {
  forAdmin: boolean;
}

const CharacterList: React.FC<Props> = (forAdmin) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => { 
  getCharacters()
    .then(fetchedCharacters => setCharacters(fetchedCharacters))
    .finally(() => setLoading(false))
  }, [])

  const characterElements = characters ? characters.map(character => (
    <li 
      key={character.id}
      className='character-box'
      >
      <CharacterItem {...forAdmin} {...character} />
    </li>
  ))
  : null
  
if (loading) return (
  <h1 className='loading-message' >...Nomad Loading!</h1>
  )

return (
    <div className='list-box' >
      <ul>
        {characterElements}
      </ul>
    </div>
  )
}

export default CharacterList
