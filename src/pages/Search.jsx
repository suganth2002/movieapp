import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import Card from '../components/Card';
import { MovieContext } from '../components/SearchContext';
 const Search = (props) => {
  const [items,setItems]=useState([])
  const {search} = useContext(MovieContext);
  console.log(!search);
  function searchdata(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDVmZjBjYTczYzZmZTVhZTI4MTRmZmYyN2I2NmI4ZCIsInN1YiI6IjY1NTg0OWNkYjU0MDAyMTRkM2NhN2VkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a6CZ7jKqrn17UIwGATj2WIg01Ez0V7SY3_MLU6QI6eA'
      }
    
    };
    let url =`https://api.themoviedb.org/3/search/movie?query=${search?search:"game"}&include_adult=false&language=en-US&page=1`
    
    fetch(url, options)
      .then(response => response.json())
      .then(response => setItems(response.results))
      .catch(err => console.error(err));
      
  }
  console.log(items)
  useEffect(searchdata,[])
  return (
    <div className='search'>
      {items.map((item) => (
        <Card key={item.id} 
        img={item.backdrop_path ? item.backdrop_path : item.poster_path}
        id={item.id}
         title={item.title}
         rating ={item.vote_average}
         />
      ))}
      

    </div>
  )
}

export default Search;