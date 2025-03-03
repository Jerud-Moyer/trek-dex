import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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
  forAdmin?: boolean;
}


const CharacterDetail: React.FC<Props> = (props) => {
  const { forAdmin } = props
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character>();
  
  const { id } = useParams<{ id: string; }>();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterById(id as string)
    .then(fetchedCharacter => setCharacter(fetchedCharacter))
    .finally(() => setLoading(false))
    window.scrollTo(0, 0);
  }, [id]);

  const handleDelete = () => {
    deleteCharacter(id as string);
  }

  if(loading) return <Loading />

  return (
    <div className={styles.detailBox}>
      {character &&
        <React.Fragment>
          <h1>{character.name}</h1>
          <img className={styles.characterPic} src={character.imageUrl} alt={character.name}/>
          <h2>{`origin: ${character.origin}`}</h2>
          <h2>{`race: ${character.race}`}</h2>
          <h2>{`affiliation: ${character.affiliation}`}</h2>
          <Link to={'/'}><div className={styles.homeLink}>home</div></Link>
          { forAdmin && 
            <React.Fragment>
              <button onClick={handleDelete}>update</button>
              <button onClick={() => navigate('/update')}>delete</button>
            </React.Fragment>
          }
        </React.Fragment>
      }
    </div>
  )
}

export default CharacterDetail
