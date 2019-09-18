import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { getBackdropImage } from "./../../helpers";
import Cast from "./../../components/Cast";

class MovieDetails extends Component {
  transformDate = date => {
    return moment(date).format("YYYY");
  };

  transformVote = vote => {
    return vote ? `${vote * 10}%` : "0%";
  };

  render() {
    const { movie } = this.props;

    const rateStyle = {
      width: `${this.transformVote(movie.vote_average)}`
    };

    return (
      <div className="movie-details">
        <div className="movie-details-block-left">
          <Link className="movie-details__backto" to="/">
            Back to home
          </Link>
          <img
            className="movie-details__poster"
            src={getBackdropImage(movie.backdrop_path)}
            alt={movie.original_title}
          />
        </div>
        <div className="movie-details-block-right">
          <h1 className="movie-details__title">
            <a href={movie.homepage} rel="noopener noreferrer" target="_blank">
              {movie.original_title}({this.transformDate(movie.release_date)})
            </a>
          </h1>
          <div className="movie-details-row">
            <div className="movie-details-row__title">User score:</div>
            <div className="movie-details-row__amount">
              <span className="movie-details__rate movie-details-rate">
                <span className="movie-details-rate__total-line">
                  <span
                    className="movie-details-rate__line"
                    style={rateStyle}
                  ></span>
                </span>
                <span className="movie-details-rate__amount">
                  {this.transformVote(movie.vote_average)}
                </span>
              </span>
            </div>
          </div>
          <div className="movie-details-row">
            <div className="movie-details-row__title">Genres:</div>
            <div className="movie-details-row__amount">
              {this.renderGenres()}
            </div>
          </div>
          <div className="movie-details-row">
            <div className="movie-details-row__title">Language:</div>
            <div className="movie-details-row__amount">
              {movie.original_language}
            </div>
          </div>
          <div className="movie-details-row">
            <div className="movie-details-row__title">Duration:</div>
            <div className="movie-details-row__amount">{`${movie.runtime} mins.`}</div>
          </div>
          <div className="movie-details-row">
            <div className="movie-details-row__title">Overview:</div>
            <div className="movie-details-row__amount">{movie.overview}</div>
          </div>
        </div>
        <div className="movie-details__cast-block">
          <h2 className="movie-details__cast-block-title">Top Billed Cast</h2>
          <div className="movie-details__cast-list">{this.renderCast()}</div>
        </div>
      </div>
    );
  }

  renderGenres = () => {
    const { movie } = this.props;

    if (movie.genres) {
      return movie.genres.map(({ name }, index) => {
        return index ? `, ${name}` : name;
      });
    }
  };

  renderCast = () => {
    const { credits } = this.props;

    if (credits) {
      return credits.slice(0, 8).map(item => {
        return <Cast key={item.id} cast={item} />;
      });
    }
  };
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie,
    credits: state.movies.credits
  };
};

export default connect(mapStateToProps)(MovieDetails);
