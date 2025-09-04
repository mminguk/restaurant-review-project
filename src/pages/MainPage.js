import Nav from '../Nav';
import Article from '../Article';
import Footer from '../footer';
import '../App.css';

function MainPage(){
    return (
        <div id="page">
            <Nav></Nav>
            <Article></Article>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;