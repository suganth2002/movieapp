import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { FaStar } from "react-icons/fa";export const Description = () => {
    const { id } = useParams()
    const [movies,setMovie] = useState([])
    console.log(id);
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=545ff0ca73c6fe5ae2814fff27b66b8d&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
useEffect(getData,[])
console.log(movies)
console.log(!movies);
  const rating = movies.vote_average
  const genre = movies.genres;
  return (
    <div className="desc">
        <img className='desc-img'  src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} alt="" />
        <div className="desc-title">
        <div className="desc-p">
         <a href={movies.homepage}> <h1>{movies.original_title}</h1></a>
          <h3><span><FaStar size={24} fill='gold' /></span>{rating}</h3>
        </div>
        <div className="overview">
            <p>{movies.overview}</p>
            <p className='date'><span className='release'>Release Date : </span>{movies.release_date}</p>
            <p className='date rev'><span className='release'>Revenue : </span>{movies.revenue}</p>
        </div>
        </div>
    </div>
  )
}
