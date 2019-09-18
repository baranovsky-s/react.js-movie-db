import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import _ from "lodash";
import Movie from "./../../components/Movie";
import LoadMore from "./../../components/LoadMore";
import Preloader from "./../../components/Preloader";

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    if (_.isEmpty(movies)) {
      return <Preloader />;
    }

    return (
      <Fragment>
        <div className="movie-list">
          <TransitionGroup>{this.renderItem()}</TransitionGroup>
        </div>
        {this.renderLoadMore()}
      </Fragment>
    );
  }

  renderItem = () => {
    const { movies, genres } = this.props;

    return movies.map(
      ({ id, title, poster_path, overview, genre_ids, release_date }) => {
        return (
          <CSSTransition
            key={id}
            classNames="fade"
            timeout={{ enter: 500, exit: 300 }}
          >
            <Movie
              id={id}
              title={title}
              poster_path={poster_path}
              description={overview}
              categories={genres}
              currentCategories={genre_ids}
              date={release_date}
            />
          </CSSTransition>
        );
      }
    );
  };

  renderLoadMore = () => {
    const { pages, page } = this.props;

    if (pages > 1 && page !== pages) return <LoadMore />;
  };
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    page: state.movies.page,
    pages: state.movies.total_pages,
    genres: state.genres.genres
  };
};

export default connect(mapStateToProps)(MovieList);
