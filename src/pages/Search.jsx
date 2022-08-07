import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      termSearch: "",
      isDisabled: true,
      isLoading: false,
      hasResults: false,
      results: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const minLength = 2;
        if (value.length >= minLength) {
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

  searchResult = () => {
    const { search } = this.state;
    this.setState(
      (prevState) => ({
        termSearch: prevState.search,
        search: "",
        isLoading: true,
        isDisabled: true,
      }),
      () => {
        setTimeout(async () => {
          const results = await searchAlbumsAPI(search);
          this.setState({
            isLoading: false,
            hasResults: true,
            results,
          });
        }, 1500);
      }
    );
  };

  render() {
    const { isDisabled, search, isLoading, hasResults, termSearch, results } =
      this.state;
    return (
      <>
        <Header />
        <main data-testid="page-search" className="page-search">
          <aside>
            {isLoading ? <ReactLoading
                type="bars"
                color="#f72585"
                width="100px"
                height="100px"
              /> : hasResults ? (
              <div className="result-asside">
                <h3>TrybeTunes</h3>
                <p>Informações sobre os albuns</p>
                {results.map(
                  ({
                    collectionId,
                    collectionPrice,
                    releaseDate,
                    trackCount,
                    collectionName,
                  }) => {
                    return (
                      <div key={collectionId} className="info-card">
                        <Link to={`/trybetunes/album/${collectionId}`}>
                          <p>{collectionName.slice(0, 30)}</p>
                        </Link>
                        <p>{`Preço de lançamento US$ ${collectionPrice}`}</p>
                        <p>{`Data de lançamento ${releaseDate
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}`}
                        </p>
                        <p>{`Número de faixas ${trackCount}`}</p>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className="initial-aside">
                <h3>TrybeTunes</h3>
                <p>
                  Use a barra de busca para pesquisar e ouvir uma demonstração
                </p>
                <p>
                  Favorite suas músicas na página do albúm e acesse elas na
                  página de Favoritos
                </p>
                <p>Acesse e modifique seu perfil</p>
              </div>
            )}
          </aside>
          <section>
            <div className="search-container">
              <form>
                <input
                  data-testid="search-artist-input"
                  type="search"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                />
                <button
                  data-testid="search-artist-button"
                  type="button"
                  disabled={isDisabled}
                  onClick={this.searchResult}
                >
                  <FontAwesomeIcon icon={ faMagnifyingGlass } />
                </button>
              </form>
              {hasResults ? (
                <p>{`Resultado da busca por: ${termSearch}`}</p>
              ) : (
                <p>Digite um album ou artista</p>
              )}
            </div>
            <div className="search-main">
              {isLoading ? (
                <ReactLoading
                type="bars"
                color="#f72585"
                width="100px"
                height="100px"
              />
              ) : (
                results.map(
                  ({
                    artistName,
                    artworkUrl100,
                    collectionId,
                    collectionName,
                  }) => {
                    return (
                      <div key={collectionId} className="search-card">
                        <img src={artworkUrl100} alt={artistName} />
                        <Link
                          data-testid={`link-to-album-${collectionId}`}
                          to={`/trybetunes/album/${collectionId}`}
                        >
                          <p>{collectionName.slice(0, 30)}</p>
                        </Link>
                        <p className="artist-name">{`Por ${artistName.slice(0, 30)}`}</p>
                      </div>
                    );
                  }
                )
              )}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Search;
