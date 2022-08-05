import PropTypes from "prop-types";
import React from "react";
import { createUser } from "../services/userAPI";
import ReactLoading from "react-loading";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      isDisabled: true,
      isLoading: false,
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
          });
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
        const { history } = this.props;
        await createUser({ name: user });
        history.push("/trybetunes/search");
      }
    );
  };

  render() {
    const { user, isDisabled, isLoading } = this.state;
    return (
      <div data-testid="page-login" className="container-login">
        <span className="logo-login"></span>
        {isLoading ? (
          <ReactLoading
            type="bars"
            color="#f72585"
            width="100px"
            height="100px"
          />
        ) : (
          <form>
            <label htmlFor="user">
              <input
                data-testid="login-name-input"
                id="user"
                type="text"
                name="user"
                value={user}
                placeholder="Usuário"
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Login;
