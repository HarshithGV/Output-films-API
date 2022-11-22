import Movie from './Movie';
import './App.css'

import React from 'react';


const MoviesList = (props) => {
  return (
   
   
   <tbody><tr> 
   
   <th>Film Names</th> 
   <th>Episode ID</th> 
   
   </tr>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          episode_id={movie.episode_id}
         // release_date={movie.release_date}
         // opening_crawl={movie.opening_crawl}
        />
      ))}
    </tbody>
  
  );
};

export default MoviesList;