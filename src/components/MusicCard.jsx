import React from "react";
import PropTypes from "prop-types";
import { addSong, removeSong } from "../services/favoriteSongsAPI";
import Loading from "./Loading";

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isFav: false,
    };
  }

  componentDidMount() {
    this.isFavorite();
  }

  isFavorite = () => {
    const { favorites, trackId } = this.props;
    if (favorites.some((song) => song.trackId === trackId)) {
      this.setState({
        isFav: true,
      });
    } else {
      this.setState({
        isFav: false,
      });
    }
  };

  handleFav = () => {
    this.setState(
      (prevState) => ({
        isLoading: true,
        isFav: !prevState.isFav,
      }),
      async () => {
        const { objTotal } = this.props;
        const { isFav } = this.state;
        if (isFav) {
          await addSong(objTotal);
          this.setState({
            isLoading: false,
          });
        } else {
          await removeSong(objTotal);
          this.setState({
            isLoading: false,
          });
        }
      }
    );
  };

  render() {
    const { isLoading, isFav } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={previewUrl} controls>
              <track kind="captions" />O seu navegador não suporta o elemento{" "}
              <code>audio</code>.
            </audio>
            <label htmlFor={trackId} data-testid={`checkbox-music-${trackId}`}>
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
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  objTotal: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
};

export default MusicCard;
