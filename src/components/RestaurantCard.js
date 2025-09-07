import { Link } from "react-router-dom";

function RestaurantCard(props){
    return (
        <Link to={`/DetailPage/${props.id}`} className='card'>
            <img src={props.image} alt="menu" />
            <h4>{props.title}</h4>
            <p>{props.hashtag}</p>
            <p className="address">{props.address}</p>
        </Link>
    );
}

export default RestaurantCard;