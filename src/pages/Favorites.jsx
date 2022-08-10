import React from "react";
import Header from "../components/Header";
import { getFavoriteSongs, removeSong } from "../services/favoriteSongsAPI";
import ReactLoading from "react-loading";

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      songs: [],
      isFav: true,
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = async () => {
    const songs = await getFavoriteSongs();
    this.setState({
      songs,
    });
  };

  handleFav = ({ target }) => {
    const { songs } = this.state;
    const remove = songs.find(
      (song) => song.trackId === parseInt(target.value, 10)
    );
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        await removeSong(remove);
        const newSongs = await getFavoriteSongs();
        this.setState({
          isLoading: false,
          songs: newSongs,
        });
      }
    );
  };

  render() {
    const { isLoading, songs, isFav } = this.state;
    return (
      <>
        <Header />
        <main data-testid="page-favorites" className="page-favorites">
          <h1>Favoritos</h1>
          {isLoading ? (
            <ReactLoading
              type="bars"
              color="#f72585"
              width="100px"
              height="100px"
            />
          ) : (
            <div className="favorite-container">
              {songs.map((song) => {
                const { trackName, previewUrl, trackId, artworkUrl60 } = song;
                return (
                  <div key={trackId} className="favorite">
                    <p>{trackName}</p>
                    <img src={artworkUrl60} alt={trackName} />
                    <audio
                      data-testid="audio-component"
                      src={previewUrl}
                      controls
                    >
                      <track kind="captions" />O seu navegador não suporta o
                      elemento <code>audio</code>.
                    </audio>
                    <input
                      id={trackId}
                      name="fav"
                      type="checkbox"
                      value={trackId}
                      checked={isFav}
                      onChange={this.handleFav}
                    />
                    <label
                      htmlFor={trackId}
                      data-testid={`checkbox-music-${trackId}`}
                    >
                      Favorita
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </>
    );
  }
}

export default Favorites;
