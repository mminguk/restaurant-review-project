import Nav from '../Nav';
import Footer from '../footer';
import RestaurantCard from '../components/RestaurantCard';
import { korea } from '../data/korea-data';
import { china } from '../data/china-data';
import { japan } from '../data/japan-data';
import { weston } from '../data/weston-data';
import { dessert } from '../data/dessert-data';
import '../App.css';
import { useNavigate } from 'react-router-dom';



function MainPage(){
  const navigate=useNavigate();
  const onClickHandler=(name)=>{
    navigate(`/${name}`);
  }
    return (
        <div id="page">
            <Nav></Nav>
            <div id="article-top">
              <h1>이 사이트는 천안의 맛집들을 소개해주는 사이트입니다. 많은 관심부탁드립니다!!</h1>
              <div id="article-search">
                <h2>맛집 검색</h2>
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
            </div>
          <span><h2>인기 있는 한식 맛집</h2></span>
          <div id='recommand'>
            {korea.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
              <button onClick={()=>{onClickHandler('Korea')}}>더보기</button>
          </div>
          <span><h2>인기 있는 중식 맛집</h2></span>
          <div id='recommand'>
            {china.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
              <button onClick={()=>{onClickHandler('China')}}>더보기</button>
          </div>
          <span><h2>인기 있는 일식 맛집</h2></span>
          <div id='recommand'>
            {japan.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
              <button onClick={()=>{onClickHandler('Japan')}}>더보기</button>
          </div>
          <span><h2>인기 있는 양식 맛집</h2></span>
          <div id='recommand'>
            {weston.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
              <button onClick={()=>{onClickHandler('Weston')}}>더보기</button>
          </div>
          <span><h2>인기 있는 디저트 맛집</h2></span>
          <div id='recommand'>
            {dessert.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
              <button onClick={()=>{onClickHandler('Dessert')}}>더보기</button>
          </div>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;