import logo from './logo.svg';
import './App.css';
import SideNavigation from './Side_navbar/side_nav';
import TopNav from './top_b/top_b';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav/>
        <SideNavigation/>
      </header>
    </div>
  );
}

export default App;
