import { Link } from "react-router-dom";

function MenuCard(props){
    return (
        <Link to={`/DetailPage/${props.id}`} className='card'>
            <img src={props.image} alt="menu" />
            <p>{props.name}</p>
        </Link>
    );
}

export default MenuCard;