import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./../../components/MovieList";
import { loadMovies, clearState } from "./../../actions";
import { modes } from "./../../constants";

class Search extends Component {
  componentDidMount() {
    const { page, query, loadMovies, clearState } = this.props;

    clearState();
    loadMovies(page, query, modes.SEARCH);
  }

  render() {
    const { query } = this.props;

    return <MovieList query={query} />;
  }
}

const mapStateToProps = state => {
  return {
    page: state.movies.page,
    query: state.movies.query,
    mode: state.movies.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: (page, query, mode) => {
      dispatch(loadMovies(page, query, mode));
    },
    clearState: () => {
      dispatch(clearState());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
