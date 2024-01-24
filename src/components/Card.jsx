import './components.css'
import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';

function Card(props){
    return(
        
           <Link to={`/movie/${props.id}`}> <div className="card">
            <img src={`https://image.tmdb.org/t/p/original${props.img}`} alt="" />
            <div>
            <p className='title'>{props.title}</p>
            <p className='rating'><span><StarFilled /></span>{props.rating}</p>
            </div>
           
            </div>
           </Link> 
       
    )
}

export default Card;