import React from "react";
import { Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import { createUser } from "../services/userAPI";


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      isDisabled: true,
      isLoading: false,
      isSavedName: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const minChar = 3;
        if (value.length >= minChar) {
          this.setState({
            isDisabled: false,
          });
        } else {
          this.setState({
            isDisabled: true,
          })
        }
      }
    );
  };

  handleClick = () => {
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        const { user } = this.state;
        await createUser({ name: user });
        this.setState({
          isSavedName: true,
        });
      }
    );
  };

  render() {
    const { user, isDisabled, isLoading, isSavedName } = this.state;
    return (
      <div data-testid="page-login" className="container-login">
        <span className="logo-login"></span>
        {isSavedName && <Redirect to="/trybetunes/search" />}
        {isLoading ? (
          <Loading />
        ) : (
          <form>
            <label htmlFor="user">
              <input
                data-testid="login-name-input"
                id="user"
                type="text"
                name="user"
                value={user}
                placeholder='Usuário'
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="password">
              <input type="password" id="password" placeholder="Senha" />
            </label>

            <button
              data-testid="login-submit-button"
              type="button"
              disabled={isDisabled}
              onClick={this.handleClick}
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
