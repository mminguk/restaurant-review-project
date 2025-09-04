import logo from './logo.svg';
import './App.css';
import Korea from './pages/Korea';
import China from './pages/China';
import Japan from './pages/Japan';
import Weston from './pages/Weston';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/Korea" element={<Korea />}></Route>
                <Route path="/China" element={<China />}></Route>
                <Route path="/Japan" element={<Japan />}></Route>
                <Route path="/weston" element={<Weston />}></Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
