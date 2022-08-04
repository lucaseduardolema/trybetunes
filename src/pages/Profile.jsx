import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: {},
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  handleUser = async () => {
    const user = await getUser();
    this.setState({
      isLoading: false,
      user,
    });
  }

  render() {
    const { isLoading, user } = this.state;
    const userCard = (
      <div>
        <img data-testid="profile-image" src={ user.image } alt={ user.name } />
        <p>
          Nome:
          <span>{user.name}</span>
        </p>
        <p>
          Email:
          <span>{user.email}</span>
        </p>
        <p>
          Descrição:
          <span>{user.description}</span>
        </p>
        <Link to="profile/edit">
          Editar perfil
        </Link>
      </div>
    );
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Perfil</p>
        <div>
          {
            isLoading ? <Loading /> : userCard
          }
        </div>
      </div>
    );
  }
}

export default Profile;
