import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteCharacter, getCharacterById } from '../sevices/trek-dex-api';
import './CharacterDetail.css';

type Character = {
  name: string;
  affiliation: string;
  origin: string;
  race: string;
  imageUrl: string;
}

type Props = {
  forAdmin: boolean;
  selectedCharacter: Character;
}


const CharacterDetail: React.FC<Props> = ({ forAdmin, selectedCharacter }) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character>(selectedCharacter);
  
  const { id }: any = useParams();
  const history = useHistory();

  useEffect(() => {
    getCharacterById(id)
    .then(fetchedCharacter => setCharacter(fetchedCharacter))
    .finally(() => setLoading(false))
    window.scrollTo(0, 0);
  }, [id]);

  const handleDelete = () => {
    deleteCharacter(id);
  }

  if(loading) return <h1 className='loading-message' >Nomad Loading!</h1>

  return (
    <div className='detail-box'>
      <h1>{character.name}</h1>
      <img className='character-pic' src={character.imageUrl} alt={character.name}/>
      <h2>{`origin: ${character.origin}`}</h2>
      <h2>{`race: ${character.race}`}</h2>
      <h2>{`affiliation: ${character.affiliation}`}</h2>
      <Link to={'/'}><div className='home-link'>home</div></Link>
      { forAdmin && 
      <>
      <button onClick={handleDelete}>update</button>
      <button onClick={() => history.push('/update')}>delete</button>
      </>
      }
    </div>
  )
}

export default CharacterDetail
