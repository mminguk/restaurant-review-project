import { Link } from "react-router-dom";
import './styles/Nav.css';
function Nav(){
    return (
        <div id="page-nav">
          <nav>
            <span><Link to="/">홈</Link></span>
            <span><Link to="/Korea">한식</Link></span>
            <span><Link to="/China">중식</Link></span>
            <span><Link to="/Japan">일식</Link></span>
            <span><Link to="/Weston">양식</Link></span>
            <span><Link to="/Dessert">디저트</Link></span>
          </nav>
        </div>
    );
}

export default Nav;