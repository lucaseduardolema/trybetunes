import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/trybetunes" component={ Login } />
        <Route path="/trybetunes/search" component={ Search } />
        <Route path="/trybetunes/album/:id" component={ Album } />
        <Route path="/trybetunes/favorites" component={ Favorites } />
        <Route exact path="/trybetunes/profile" component={ Profile } />
        <Route path="/trybetunes/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
