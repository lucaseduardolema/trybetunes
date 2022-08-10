import PropTypes from "prop-types";
import React from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading";
import { getUser, updateUser } from "../services/userAPI";

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: {},
      isDisabled: true,
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  allUserInfoExist = () => {
    const { user } = this.state;
    if (!Object.values(user).includes("")) {
      this.setState({
        isDisabled: false,
      });
    }
  };

  handleUser = async () => {
    const userInfo = await getUser();
    this.setState(
      {
        isLoading: false,
        user: userInfo,
      },
      () => {
        this.allUserInfoExist();
      }
    );
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      (prevState) => ({
        user: { ...prevState.user, [name]: value },
      }),
      () => {
        this.allUserInfoExist();
      }
    );
  };

  saveProfile = () => {
    const {
      user: { name, email, description, image },
    } = this.state;
    const { history } = this.props;
    updateUser({ name, email, image, description });
    history.push("/trybetunes/profile");
  };

  render() {
    const {
      isLoading,
      user: { name, email, description, image },
      isDisabled,
    } = this.state;
    return (
      <>
        <Header />
        <main data-testid="page-profile-edit" className="page-profile-edit">
          <h1>Editar Perfil</h1>
          {isLoading ? (
            <ReactLoading
              type="bars"
              color="#f72585"
              width="100px"
              height="100px"
            />
          ) : (
            <form>
              <label htmlFor="name">
                Editar nome:
                <input
                  data-testid="edit-input-name"
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="email">
                Editar e-mail:
                <input
                  data-testid="edit-input-email"
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Editar descrição:
                <input
                  data-testid="edit-input-description"
                  id="description"
                  name="description"
                  type="text"
                  value={description}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="image">
                Url da imagem:
                <input
                  data-testid="edit-input-image"
                  id="image"
                  name="image"
                  type="text"
                  value={image}
                  onChange={this.handleChange}
                />
              </label>

              <button
                data-testid="edit-button-save"
                type="button"
                disabled={isDisabled}
                onClick={this.saveProfile}
              >
                Salvar
              </button>
            </form>
          )}
        </main>
      </>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default ProfileEdit;
