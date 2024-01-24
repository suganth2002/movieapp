import Card from "../components/Card";
import { useEffect, useState } from "react";
import './pages.css';

function Home() {
  const [items, setItems] = useState([]);

  function getData() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=545ff0ca73c6fe5ae2814fff27b66b8d")
      .then((res) => res.json())
      .then((data) => setItems(data.results))
      .catch((err) => console.log(err));
      
  }
  useEffect(getData, []);

  return (
    <div className="home">
      {items.map((item) => (
        <Card key={item.id} 
        id ={item.id}
        img={item.backdrop_path}
         title={item.title}
         rating ={item.vote_average}
         />
      ))}
    </div>
  );
}

export default Home;
