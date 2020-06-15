import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      needLoad: true,
    };
  }
  componentDidMount() {
    movieAPI.getMovies().then((res) => this.setState({ movies: res, needLoad: false }));
  }
  render() {
    const { movies, needLoad } = this.state;
    return needLoad ? (
      <Loading />
    ) : (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
