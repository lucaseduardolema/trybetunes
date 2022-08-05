import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

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
        }
      }
    );
  };

  searchResult = async () => {
    const { search } = this.state;
    const results = await searchAlbumsAPI(search);
    this.setState(
      (prevState) => ({
        termSearch: prevState.search,
        search: "",
        isLoading: true,
        hasResults: true,
        results,
      }),
      () => {
        this.setState({
          isLoading: false,
        });
      }
    );
  };

  render() {
    const { isDisabled, search, isLoading, hasResults, termSearch, results } =
      this.state;
    return (
      <>
        <Header />
        <main data-testid="page-search">
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
                Pesquisar
              </button>
            </form>
            {hasResults ? (
              <p>{`Resultado de álbuns de: ${termSearch}`}</p>
            ) : (
              <p>Digite um album ou artista</p>
            )}
          </div>
          <div className="search-main">
            {isLoading ? (
              <Loading />
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
                      <p>{artistName.slice(0, 30)}</p>
                      <Link
                        data-testid={`link-to-album-${collectionId}`}
                        to={`/trybetunes/album/${collectionId}`}
                      >
                        <p>{collectionName.slice(0, 30)}</p>
                      </Link>
                    </div>
                  );
                }
              )
            )}
          </div>
        </main>
      </>
    );
  }
}

export default Search;
