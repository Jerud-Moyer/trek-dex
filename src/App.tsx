import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AdminPage from './admin/AdminPage';
import './App.css';
import CharacterDetail from './characters/CharacterDetail';
import CharacterList from './characters/CharacterList';
import UpdateCharacter from './characters/UpdateCharacter';
import Header from './header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={CharacterList}/>
          <Route exact path='/detail/:id' component={CharacterDetail}/>
          <Route exact path='/admin' component={AdminPage} />
          <Route exact path='/update/:id' component={UpdateCharacter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
