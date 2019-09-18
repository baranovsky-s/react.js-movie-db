import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { getMovieImage } from "./../../helpers";

export default class Movie extends Component {
  getCategories = ids => {
    const { categories } = this.props;
    const currentCategories = [];

    ids.forEach(id => {
      categories.forEach(category => {
        if (id === category.id) {
          currentCategories.push(category);
        }
      });
    });

    const categoryList = currentCategories.map(({ id, name }, index) => {
      return <span key={id}>{index ? `, ${name}` : name}</span>;
    });

    return categoryList;
  };

  transformDate = date => {
    return moment(date).format("MMMM D, YYYY");
  };

  render() {
    const {
      id,
      title,
      poster_path,
      description,
      currentCategories,
      date
    } = this.props;

    return (
      <div className="movie">
        <div className="movie-block-left">
          <img src={getMovieImage(poster_path)} alt={title} />
        </div>
        <div className="movie-block-right">
          <h2 className="movie__title">{title}</h2>
          <div className="movie__date">{this.transformDate(date)}</div>
          <div className="movie__category">
            {this.getCategories(currentCategories)}
          </div>
          <div className="movie__description">{description}</div>
          <Link className="movie__readmore" to={`/movie/${id}`}>
            Read more
          </Link>
        </div>
      </div>
    );
  }
}
