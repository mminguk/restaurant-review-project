import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Article from './Article';
import Footer from './footer';
import AppRouter from './AppRouter';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="page">
        <Nav></Nav>
        <Article></Article>
        <Footer></Footer>
      </div>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
