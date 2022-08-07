import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import MusicCard from "../components/MusicCard";
import getMusics from "../services/musicsAPI";
import { getFavoriteSongs } from "../services/favoriteSongsAPI";
import ReactLoading from "react-loading";

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
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await getMusics(id);
    this.setState({
      info: response[0],
      musics: response.slice(1),
    });
  };

  favorites = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        setTimeout(async () => {
          const favorites = await getFavoriteSongs();
          this.setState({
            isLoading: false,
            favorites,
          });
        }, 1500);
      }
    );
  };

  render() {
    const {
      musics,
      info: { artworkUrl100, artistName, collectionName },
      isLoading,
      favorites,
    } = this.state;
    return (
      <>
        <Header />
        <main data-testid="page-album" className="album-page">
          {isLoading ? (
            <ReactLoading
              type="bars"
              color="#f72585"
              width="100px"
              height="100px"
            />
          ) : (
            <section className="album-elements">
              <div className="album-info">
                <img src={artworkUrl100} alt={artistName} />
                <p data-testid="album-name">{collectionName}</p>
                <p data-testid="artist-name">{artistName}</p>
              </div>
              <div className="music-card-container">
                {musics.map((music) => (
                  <MusicCard
                    key={music.trackId}
                    trackName={music.trackName}
                    previewUrl={music.previewUrl}
                    trackId={music.trackId}
                    favorites={favorites}
                    objTotal={music}
                  />
                ))}
              </div>
            </section>
          )}
        </main>
      </>
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
