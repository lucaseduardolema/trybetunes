import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = () => {
    this.setState({
      isLoading: true,
    }, async () => {
      const user = await getUser();
      this.setState({
        name: user.name,
        isLoading: false,
      });
    });
  }

  render() {
    const { name, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <Link data-testid="link-to-search" to="/trybetunes/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/trybetunes/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/trybetunes/profile">Profile</Link>
        </nav>
        {
          isLoading ? <Loading />
            : <span data-testid="header-user-name">{name}</span>
        }
      </header>
    );
  }
}

export default Header;
