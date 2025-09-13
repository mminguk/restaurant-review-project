import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RestaurantCard(props){
    const navigate=useNavigate();
    const onClickHandler=(id)=>{
        navigate(`/DetailPage/${id}`);
    }
    return (
        <div onClick={()=>{
            onClickHandler(props.id);            
        }} className='card'>
            <img src={props.image} alt="menu" />
            <h4>{props.title}</h4>
            <p>{props.hashtag}</p>
            <p className="address">{props.address}</p>
        </div>
    );
}

export default RestaurantCard;