import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      termSearch: '',
      isDisabled: true,
      isLoading: false,
      hasResults: false,
      results: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const minLength = 2;
      if (value.length >= minLength) {
        this.setState({
          isDisabled: false,
        });
      }
    });
  }

  searchResult = async () => {
    const { search } = this.state;
    const results = await searchAlbumsAPI(search);
    this.setState((prevState) => ({
      termSearch: prevState.search,
      search: '',
      isLoading: true,
      hasResults: true,
      results,
    }), () => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { isDisabled, search, isLoading, hasResults, termSearch, results } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <p>Search</p>
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ isDisabled }
            onClick={ this.searchResult }
          >
            Pesquisar
          </button>
        </form>
        {isLoading && <Loading />}
        {hasResults ? <p>{`Resultado de álbuns de: ${termSearch}`}</p> : ''}
        {results.length > 0 ? results.map((result) => {
          const { artistName, artworkUrl100, collectionId, collectionName } = result;
          return (
            <div key={ collectionId }>
              <Link
                data-testid={ `link-to-album-${collectionId}` }
                to={ `/album/${collectionId}` }
              >
                <img src={ artworkUrl100 } alt={ artistName } />
                <p>{collectionName}</p>
                <p>{artistName}</p>
              </Link>
            </div>
          );
        }) : <p>Nenhum álbum foi encontrado</p>}
      </div>
    );
  }
}

export default Search;
