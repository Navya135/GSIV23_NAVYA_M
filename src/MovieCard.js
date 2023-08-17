import React from 'react';

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...';
  }
  return title;
};

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, overview } = movie;

  return (
    <div className="movie-card" style={{textDecoration: "none"}}>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      <div className="" style={{color:"#4A4A4A"}}>
        <h3>{truncateTitle(title, 20)} <span style={{color:"#9B9B9B"}}>({vote_average})</span></h3>
        <p>{truncateDescription(overview, 50)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
