import logo from './logo.svg';
import './App.css';
import Korea from './pages/Korea';
import China from './pages/China';
import Japan from './pages/Japan';
import Weston from './pages/Weston';
import Dessert from './pages/Dessert';
import ReviewCreate from './CRUD/ReviewCreate';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Bookmark from './pages/Bookmark';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/Korea" element={<Korea />}></Route>
                <Route path="/China" element={<China />}></Route>
                <Route path="/Japan" element={<Japan />}></Route>
                <Route path="/Weston" element={<Weston />}></Route>
                <Route path="/Dessert" element={<Dessert />}></Route>
                <Route path="/Bookmark" element={<Bookmark />}></Route>
                <Route path="/:Category/DetailPage/:PageId" element={<DetailPage />}></Route>
                <Route path="/:Category/DetailPage/Review/:PageId" element={<ReviewCreate />}></Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
