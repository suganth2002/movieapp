// import { useEffect } from "react"
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Toprated from "./pages/Toprated";
import Search from './pages/Search';
import { Description } from './pages/Description';
import MovieContextProvider from './components/SearchContext';
function App() {
  

  return (
   <MovieContextProvider>
      <BrowserRouter>
       <>
      <Navbar />
      </>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/search/" element={<Search />} />
        <Route path = "/movie/:id" element ={<Description />} />
        <Route path='/popular' element ={<Home />} />
      </Routes>
      
      </BrowserRouter>
      
      
      </MovieContextProvider>
  );
}

export default App;
