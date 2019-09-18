import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMovies, clearState, loadGenres } from "./../../actions";
import MovieList from "./../../components/MovieList";

class Home extends Component {
  componentDidMount() {
    const { loadMovies, clearState, loadGenres } = this.props;

    clearState();
    loadGenres();
    loadMovies();
  }

  render() {
    return <MovieList />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: () => {
      dispatch(loadMovies());
    },
    clearState: () => {
      dispatch(clearState());
    },
    loadGenres: () => {
      dispatch(loadGenres());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
