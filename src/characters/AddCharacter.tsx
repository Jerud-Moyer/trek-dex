import React, { useState } from 'react';
import { addCharacter } from '../sevices/trek-dex-api';
import './AddCharacter.css';

const AddCharacter = () => {
  const [name, setName] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [origin, setOrigin] = useState<string>('')
  const [race, setRace] = useState<string>('')
  const [affiliation, setAffiliation] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    addCharacter({
      name,
      imageUrl,
      origin,
      race,
      affiliation
    });
    setName('')
    setImageUrl('')
    setOrigin('')
    setRace('')
    setAffiliation('')
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
    if(target.name === 'origin') setOrigin(target.value);
    if(target.name === 'race') setRace(target.value);
    if(target.name === 'affiliation') setAffiliation(target.value);
  };

  return (
    <div className='create-box' >
      <h2>add a character</h2>
      <form onSubmit={handleSubmit} >
        <div className='input-box'>
        <label htmlFor="name">name</label>
        <input 
          type="text"
          name='name'
          id='name'
          value={name}
          onChange={handleChange}
        />
        </div>
        <div className='input-box'>
        <label htmlFor='imageUrl'>image url</label>
        <input 
          type='text'
          name='imageUrl'
          id='imageUrl'
          value={imageUrl}
          onChange={handleChange}
        />
        </div>
        <div className='input-box'>
        <label htmlFor='origin'>origin</label>
        <input 
          type='text'
          name='origin'
          id='origin'
          value={origin}
          onChange={handleChange}
        />
        </div>
        <div className='input-box'>
        <label htmlFor='race'>race</label>
        <input 
          type='text'
          name='race'
          id='race'
          value={race}
          onChange={handleChange}
        />
        </div>
        <div className='input-box'>
        <label htmlFor='affiliation'>affiliation</label>
        <input 
          type='text'
          name='affiliation'
          id='affiliation'
          value={affiliation}
          onChange={handleChange}
        />
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default AddCharacter
