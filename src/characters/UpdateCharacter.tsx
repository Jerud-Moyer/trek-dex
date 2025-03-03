import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Confirm from '../confirm/Confirm';
import { deleteCharacter, getCharacterById, updateCharacter } from '../sevices/trek-dex-api';
import './UpdateCharacter.css';

interface Character {
  name: string;
  affiliation: string;
  origin: string;
  race: string;
  imageUrl: string;
}


const UpdateCharacter: React.FC = () => {
  const [character, setCharacter] = useState<Character>({name: '', affiliation: '', origin: '', race: '', imageUrl: ''});
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [race, setRace] = useState<string>('');
  const [affiliation, setAffiliation] = useState<string>('');
  const [showUpdateConfirm, setShowUpdateConfirm] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [oldImageUrl, setOldImageUrl] = useState<string>('');

  const navigate = useNavigate()
  const { id }: number | any = useParams();

  useEffect(() => {
    getCharacterById(id)
    .then((fetchedCharacter) => {
      setCharacter(fetchedCharacter);
      setName(fetchedCharacter.name);
      setImageUrl(fetchedCharacter.imageUrl);
      setOrigin(fetchedCharacter.origin);
      setRace(fetchedCharacter.race);
      setAffiliation(fetchedCharacter.affiliation);
      setOldImageUrl(fetchedCharacter.imageUrl);
    })
    .finally(() => setLoading(false))
  }, [id])

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
    if(target.name === 'origin') setOrigin(target.value);
    if(target.name === 'race') setRace(target.value);
    if(target.name === 'affiliation') setAffiliation(target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    updateCharacter(id, {
      id,
      name,
      imageUrl,
      race,
      origin,
      affiliation
    },
    oldImageUrl);
    getCharacterById(id)
    setShowUpdateConfirm(false);
    
  }

  const handleDelete = () => {
    deleteCharacter(id)
    setShowDeleteConfirm(false)
    navigate('/admin')
  }

  const handleDeleteState = () => {
    setShowDeleteConfirm(false)
  }

  const handleUpdateState = () => {
    setShowUpdateConfirm(false)
  }



  if(loading) return <h1>...Nomad Loading</h1>

  return (
    <div className='update-box' >
      <h1 className='update-headline' >{name}</h1>
      <img 
        src={character.imageUrl} 
        alt={character.name} 
        className='update-img'/>
      <h2>{`update ${name}`}</h2>
      <form onSubmit={handleSubmit} >
        <div className='form-el'>
          <label htmlFor="name">name</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}/>
        </div>
        <div className='form-el'>
          <label htmlFor="imageUrl">image url</label>
          <input 
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}/>
        </div>
        <div className='form-el'>
          <label htmlFor="origin">origin</label>
          <input 
            type="text"
            id="origin"
            name="origin"
            value={origin}
            onChange={handleChange}/>
        </div>
        <div className='form-el'>
          <label htmlFor="race">species</label>
          <input 
            type="text"
            id="race"
            name="race"
            value={race}
            onChange={handleChange}/>
        </div>
        <div className='form-el'>
          <label htmlFor="affiliation">affiliation</label>
          <input 
            type="text"
            id="affiliation"
            name="affiliation"
            value={affiliation}
            onChange={handleChange}/>
        </div>
        {showUpdateConfirm &&
        <div className='confirm-update'>
          <Confirm 
            action='update' 
            handleStateChange={handleUpdateState} 
            handleAction={handleSubmit} 
            />
        </div>
        }
      </form>
      {showDeleteConfirm &&
      <div className='confirm-delete'>
        <Confirm 
          action='delete' 
          handleStateChange={handleDeleteState} 
          handleAction={handleDelete} 
          />
      </div>
      }
      <button
        onClick={() => setShowUpdateConfirm(true)}
        >submit
      </button>
      <button 
        onClick={() => setShowDeleteConfirm(true)}
        >delete character
      </button>
      <nav>
      <Link to='/admin'>admin home</Link>
      <Link to='/'>home</Link>
      </nav>
    </div>
  )
}

export default UpdateCharacter
