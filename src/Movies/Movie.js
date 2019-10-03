import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className='frame'>
      <img src={movie.Poster} alt='' className='ract' />
      <div className='under'>{movie.Title}</div>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
