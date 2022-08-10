import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getUser } from "../services/userAPI";
import ReactLoading from "react-loading";

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
  };

  render() {
    const { isLoading, user } = this.state;
    return (
      <>
        <Header />
        <main data-testid="page-profile" className="page-profile">
          <h1>Perfil</h1>
          <div className="profile-container">
            {isLoading ? (
              <ReactLoading
                type="bars"
                color="#f72585"
                width="100px"
                height="100px"
              />
            ) : (
              <div className="profile-info">
                <img
                  data-testid="profile-image"
                  src={user.image}
                  alt={user.name}
                />
                <p>
                  {`Nome: `}
                  <span>{user.name}</span>
                </p>
                <p>
                  {`Email: `}
                  <span>{user.email}</span>
                </p>
                <p>
                  {`Descrição: `}
                  <span>{user.description}</span>
                </p>
                <Link to="profile/edit">Editar perfil</Link>
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default Profile;
