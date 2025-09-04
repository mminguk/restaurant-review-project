function RestaurantCard(props){
    return (
        <div className='card'>
            <img src={props.image} alt="menu" />
            <h4>{props.title}</h4>
            <p>{props.hashtag}</p>
            <p className="address">{props.address}</p>
        </div>
    );
}

export default RestaurantCard;