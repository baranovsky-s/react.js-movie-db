import React from "react";
import { connect } from "react-redux";
import { loadNextPage } from "./../../actions";

const LoadMore = props => {
  const { page, query, mode, loadNextPage } = props;

  const handleClickMore = () => {
    loadNextPage(page + 1, query, mode);
  };

  return (
    <button className="load-more" type="button" onClick={handleClickMore}>
      Load more
    </button>
  );
};

const mapStateToProps = state => {
  return {
    page: state.movies.page,
    query: state.movies.query,
    mode: state.movies.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNextPage: (page, query, mode) => {
      dispatch(loadNextPage(page, query, mode));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMore);
