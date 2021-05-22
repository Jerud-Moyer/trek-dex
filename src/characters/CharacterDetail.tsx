import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteCharacter, getCharacterById } from '../sevices/trek-dex-api';
import Loading from '../Loading/Loading';
import styles from './CharacterDetail.module.css';

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
  
  const { id } = useParams<{ id: string; }>();
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

  if(loading) return <Loading />

  return (
    <div className={styles.detailBox}>
      <h1>{character.name}</h1>
      <img className={styles.characterPic} src={character.imageUrl} alt={character.name}/>
      <h2>{`origin: ${character.origin}`}</h2>
      <h2>{`race: ${character.race}`}</h2>
      <h2>{`affiliation: ${character.affiliation}`}</h2>
      <Link to={'/'}><div className={styles.homeLink}>home</div></Link>
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
