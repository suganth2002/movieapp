import React from 'react'
import { useEffect,useState } from 'react';
import Card from '../components/Card';
const Toprated = () => {
  const [items,setitems]=useState([])
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=545ff0ca73c6fe5ae2814fff27b66b8d")
    .then(res=>res.json())
    .then(data=>setitems(data.results))
    .catch(err=>console.log(err))
  },[])
  console.log(items)
  return (
    <div className='toprated'>
      {
        items.map((item)=>(
          <Card key = {item.id}
                
                img ={item.backdrop_path}
                title ={item.title}
                rating ={item.vote_average}
          />
        ))
      }
    </div>
  )
}
export default Toprated;