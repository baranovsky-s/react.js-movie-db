import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setQuery, loadMovies } from "./../../actions";
import { modes } from "./../../constants";

class Search extends Component {
  handleChange = event => {
    const { setQuery } = this.props;

    setQuery(event.target.value);
  };

  handleSubmit = event => {
    const { history, page, query, loadMovies } = this.props;

    event.preventDefault();

    if (query) {
      loadMovies(page, query, modes.SEARCH);
      history.push(`/search/${query}`);
    }
  };

  render() {
    const { query } = this.props;

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          className="search__input"
          placeholder="Search for a movie"
          onChange={this.handleChange}
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.movies.query,
    page: state.movies.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      return dispatch(setQuery(query));
    },
    loadMovies: (page, query, mode) => {
      dispatch(loadMovies(page, query, mode));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
