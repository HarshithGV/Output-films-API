import './App.css';

import React,{useState} from 'react';
import MovieList from './MovieList';
//import { useEffect, useState } from "react";

function App() {

  
   
  const [movies, setMovies] = useState([]);
  
function fetchMoviesHandler() {



  fetch('https://swapi.py4e.com/api/films/').then(response => {
       return  response.json();


      }).then(data  => {
        const transformedMovies = data.results.map((movieData) => {
            return {
            id: movieData.episode_id,
              title:movieData.title,
           openingText: movieData.opening_crawl,
           realeseDate:movieData.release_date,

            }

        });

        setMovies(transformedMovies);


      });
    
    }
  

return (
   
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies = {movies}/>
      </section>
    </React.Fragment>


  );
}

     

  
export default App;