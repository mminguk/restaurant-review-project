import { useNavigate } from "react-router-dom";
import '../styles/Card.css';
import { korea } from "../data/korea-data";
import { china } from "../data/china-data";
import { japan } from "../data/japan-data";
import { weston } from "../data/weston-data";
import { dessert } from "../data/dessert-data";



function RestaurantCard(props){
    const navigate=useNavigate();
    const onClickHandler=(category,id)=>{
        navigate(`/${category}/DetailPage/${id}`,{
            state:{
                id:id,
                title:korea[id-1].title,
                address:korea[id-1].address
            }
        });
    }
    return (
        <div onClick={()=>{
            onClickHandler(props.category,props.id);            
        }} className='card'>
            <img src={props.image} alt="menu" />
            <h4>{props.title}</h4>
            <p>{props.hashtag}</p>
            <p className="address">{props.address}</p>
        </div>
    );
}

export default RestaurantCard;