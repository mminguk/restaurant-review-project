import Nav from "../Nav";
import MenuCard from "../MenuCard";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
function Dessert(){
    return (
        <>
        <Nav />
        <div id="article-top">
              <h1>천안 분위기 좋은 카페모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h2>메뉴별 카페 모음</h2></span>
        <div id="menu-list">
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu1.jpg`} name="아메리카노" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="빵" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu3.jpg`} name="라떼" />
        </div>
        <span><h2>카페 추천</h2></span>
        <div id="recommand">
            <RestaurantCard 
              image={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} 
              title="00카페"
              hashtag="#커피"
              address="00시 00구 00동"
            />
        </div>
        <Footer />
    </>
    );
}

export default Dessert;