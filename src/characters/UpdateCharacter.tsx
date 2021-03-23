import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCharacterById, updateCharacter } from '../sevices/trek-dex-api';
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
    })
  }

  if(loading) return <h1>...Nomad Loading</h1>

  return (
    <div className='update-box' >
      
      <h1 className='update-headline' >{character.name}</h1>
      <img 
        src={character.imageUrl} 
        alt={character.name} 
        className='update-img'/>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name"></label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={handleChange}/>
        <label htmlFor="imageUrl"></label>
        <input 
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleChange}/>
        <label htmlFor="origin"></label>
        <input 
          type="text"
          id="origin"
          value={origin}
          onChange={handleChange}/>
        <label htmlFor="race"></label>
        <input 
          type="text"
          id="race"
          value={race}
          onChange={handleChange}/>
        <label htmlFor="affiliation"></label>
        <input 
          type="text"
          id="affiliation"
          value={affiliation}
          onChange={handleChange}/>
          <button>submit</button>
      </form>
      <nav>
      <Link to='/admin' >admin home</Link>
      <Link to='/'>home</Link>
      </nav>
    </div>
  )
}

export default UpdateCharacter
