import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import ReactLoading from 'react-loading'

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
        <div className='logo-header'></div>
        <nav>
          <Link data-testid="link-to-search" to="/trybetunes/search">Busca</Link>
          <Link data-testid="link-to-favorites" to="/trybetunes/favorites">Favoritos</Link>
          <Link data-testid="link-to-profile" to="/trybetunes/profile">Perfil</Link>
        </nav>
        <div className='user-info'>
        {
          isLoading ? <ReactLoading color='#f72585' type='bars' width='40px' height='40px' />
            : <p>{`Olá `}<span data-testid="header-user-name">{name}</span></p>
        }
        </div>
      </header>
    );
  }
}

export default Header;
