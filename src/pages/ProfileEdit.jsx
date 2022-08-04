import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: {},
      isDisabled: true,
      isSavedUser: false,
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  allUserInfoExist = () => {
    const { user } = this.state;
    if (!Object.values(user).includes('')) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  handleUser = async () => {
    const userInfo = await getUser();
    this.setState({
      isLoading: false,
      user: userInfo,
    }, () => {
      this.allUserInfoExist();
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }), () => {
      this.allUserInfoExist();
    });
  }

  saveProfile = () => {
    const { user: { name, email, description, image } } = this.state;
    updateUser({ name, email, image, description });
    this.setState({
      isSavedUser: true,
    });
  }

  render() {
    const { isLoading,
      user: { name, email, description, image },
      isDisabled,
      isSavedUser } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Editar Perfil</p>
        { isLoading && <Loading /> }
        <form>
          <label htmlFor="name">
            Editar nome:
            <input
              data-testid="edit-input-name"
              id="name"
              name="name"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="email">
            Editar e-mail:
            <input
              data-testid="edit-input-email"
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            Editar descrição:
            <input
              data-testid="edit-input-description"
              id="description"
              name="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="image">
            Url da imagem:
            <input
              data-testid="edit-input-image"
              id="image"
              name="image"
              type="text"
              value={ image }
              onChange={ this.handleChange }
            />
          </label>

          <button
            data-testid="edit-button-save"
            type="button"
            disabled={ isDisabled }
            onClick={ this.saveProfile }
          >
            Salvar
          </button>
        </form>
        { isSavedUser && <Redirect to="/profile" />}
      </div>
    );
  }
}

export default ProfileEdit;
