function MenuCard(props){
    return (
        <div className='card'>
            <img src={props.image} alt="menu" />
            <p>{props.name}</p>
        </div>
    );
}

export default MenuCard;