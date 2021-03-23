import React from 'react'
import AddCharacter from '../characters/AddCharacter'
import CharacterList from '../characters/CharacterList'

const AdminPage = () => {
  return (
    <div>
      <AddCharacter />
      <CharacterList forAdmin/>
    </div>
  )
}

export default AdminPage
