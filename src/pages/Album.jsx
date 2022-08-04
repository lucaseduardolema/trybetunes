import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      info: {},
      musics: [],
      favorites: [],
    };
  }

  componentDidMount() {
    this.fetchAlbum();
    this.favorites();
  }

  fetchAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    // const { location: { pathname } } = this.props;
    // const id = pathname.match(/\d/g).join('');
    const response = await getMusics(id);
    this.setState({
      info: response[0],
      musics: response.slice(1),
    });
  }

  favorites = () => {
    this.setState({
      isLoading: true,
    }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({
        isLoading: false,
        favorites,
      });
    });
  }

  render() {
    const { musics, info, isLoading, favorites } = this.state;
    const musicMapCard = (
      <div>
        {musics.map((music) => (
          <MusicCard
            key={ music.trackId }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
            trackId={ music.trackId }
            favorites={ favorites }
            objTotal={ music }
          />
        ))}
      </div>
    );
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img src={ info.artworkUrl100 } alt={ info.artistName } />
          <p data-testid="album-name">{info.collectionName}</p>
          <p data-testid="artist-name">{info.artistName}</p>
        </div>
        { isLoading ? <Loading /> : musicMapCard }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
