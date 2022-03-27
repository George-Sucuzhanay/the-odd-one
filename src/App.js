import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchColleges from './components/SearchColleges';
import logo from '../src/assets/logo.png'
import NearestColleges from './components/NearestColleges';
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <div>
            <h1>This is my header</h1>
            <img src={logo} alt="The Odd One Logo" width="500"/>
      </div>
      <div className='links'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/SearchColleges"}>Search Colleges</NavLink>
          <NavLink to={"/NearestColleges"}>Nearest Colleges</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SearchColleges" element={<SearchColleges/>}/>
        <Route path="/NearestColleges" element={<NearestColleges/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

    </div>
  );
}

export default App;
