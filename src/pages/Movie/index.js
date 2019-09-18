import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import MovieDetails from "./../../components/MovieDetails";
import Preloader from "./../../components/Preloader";
import { loadMovie, loadCredits } from "./../../actions";

class Movie extends Component {
  componentDidMount() {
    const { id, loadMovie, loadCredits } = this.props;

    loadMovie(id);
    loadCredits(id);
  }
  render() {
    const { movie } = this.props;

    if (_.isEmpty(movie)) {
      return <Preloader />;
    }

    return <MovieDetails />;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadMovie: id => {
      dispatch(loadMovie(id));
    },
    loadCredits: id => {
      dispatch(loadCredits(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
