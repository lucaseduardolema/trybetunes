import React from "react";
import Header from "../components/Header";
import { getFavoriteSongs, removeSong } from "../services/favoriteSongsAPI";
import Loading from "../components/Loading";

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
        <main data-testid="page-favorites">
          <p>Favoritos</p>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              {songs.map((song) => {
                const { trackName, previewUrl, trackId, artworkUrl60 } = song;
                return (
                  <div key={trackId}>
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
                    <label
                      htmlFor={trackId}
                      data-testid={`checkbox-music-${trackId}`}
                    >
                      Favorita
                      <input
                        id={trackId}
                        name="fav"
                        type="checkbox"
                        value={trackId}
                        checked={isFav}
                        onChange={this.handleFav}
                      />
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
