import logo from './logo.svg';
import './App.css';
import SideNavigation from './Side_navbar/side_nav';
import TopNav from './top_b/top_b';
import Home from './Homepage/HomePage';
import CardC from './Filmspage/Card';
import FilmPage from './Filmspage/FilmPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav/>
        <SideNavigation/>
        {/* <Home/> */}
        {/* <CardC/> */}
        <FilmPage/>
        
        
      </header>
    </div>
  );
}

export default App;
