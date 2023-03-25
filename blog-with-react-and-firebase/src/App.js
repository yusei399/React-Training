import './App.css';
import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="logout" element={<Logout/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
