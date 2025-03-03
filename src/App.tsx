import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AdminPage from './admin/AdminPage';
import './App.css';
import CharacterDetail from './characters/CharacterDetail';
import UpdateCharacter from './characters/UpdateCharacter';
import Header from './header/Header';
import HomePage from './home/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/detail/:id' element={<CharacterDetail />}/>
          <Route path='/admin' Component={AdminPage} />
          <Route path='/update/:id' Component={UpdateCharacter} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
