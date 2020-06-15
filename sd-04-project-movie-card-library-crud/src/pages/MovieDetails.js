import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      needLoad: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      needLoad: false,
    }));
  }

  render() {
    const { movie, needLoad } = this.state;

    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;

    if (needLoad) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <span className="card-title">{`Title: ${title}`}</span>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="" to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link className="" to="/">VOLTAR</Link>
        <Link className="" to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.func, PropTypes.object]))
    .isRequired,
};
