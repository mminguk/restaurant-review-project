import Card from "./Card";
function Article(){
    return (
        <article>
            <div id="article-top">
              <h1>이 사이트는 천안의 맛집들을 소개해주는 사이트입니다. 많은 관심부탁드립니다!!</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
            </div>
            <span><h2>메뉴별 맛집 모음</h2></span>
            <div id="menu-list">
              <Card image={`${process.env.PUBLIC_URL}/assets/menu1.jpg`} name="치킨" />
              <Card image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="피자" />
              <Card image={`${process.env.PUBLIC_URL}/assets/menu3.jpg`} name="분식" />
              <Card image={`${process.env.PUBLIC_URL}/assets/menu4.jpg`} name="중식" />
            </div>
          <span><h2>오늘의 추천 맛집</h2></span>
          <div id='recommand'>
            <div className='card'>
                <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="matzip" />
                <h4>00치킨</h4>
                <p>#치킨</p>
                <p>00시 00동</p>
            </div>
            <div className='card'>
                <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="matzip" />
                <h4>00치킨</h4>
                <p>#치킨</p>
                <p>00시 00동</p>
            </div>
          </div>
          <span><h2>최근에 개업한 식당</h2></span>
          <div id="new-restaurant">
            <div className='card'>
                <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="matzip" />
                <h4>00버거</h4>
                <p>#버거</p>
                <p>00시 00동</p>
            </div>
            <div className='card'>
                <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="matzip" />
                <h4>00국밥</h4>
                <p>#국밥</p>
                <p>00시 00동</p>
            </div>
          </div>
        </article>
    );
}

export default Article;