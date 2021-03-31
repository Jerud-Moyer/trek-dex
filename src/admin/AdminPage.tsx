import React from 'react'
import { Link } from 'react-router-dom'
import AddCharacter from '../characters/AddCharacter'
import CharacterList from '../characters/CharacterList'

const AdminPage = () => {
  return (
    <div>
      <AddCharacter />
      <CharacterList forAdmin/>
      <nav><Link to={'/'}>home</Link></nav>
    </div>
  )
}

export default AdminPage
