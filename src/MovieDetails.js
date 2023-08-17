import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'; 

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1df98676a61f34dcffcc05966eeec6d4`
      );
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    title,
    vote_average,
    release_date,
    runtime,
    overview,
    director,
    cast,
    poster_path,
  } = movie;

  return (
  <div>
   <Navbar movieTitle={title} />
    <div className="movie-details" style={{marginTop:"20px",marginLeft:"20px"}}>
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      </div>
      <div className="movie-info" style={{color:"#4A4A4A",marginTop:"20px"}}>
        <h3>{title} <span style={{color:"#9B9B9B"}}>({vote_average})</span></h3>
        <div className="info-row">
          <p>{release_date}</p>
          <span className="vertical-line"></span>
          <p>{runtime} min</p>
          {director &&<span className="vertical-line"></span>}
          <p >{director}</p>
        </div>
        {cast && <p>Cast: {cast.join(', ')}</p>}
        <p>Description: {overview}</p>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
