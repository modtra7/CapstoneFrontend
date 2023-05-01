import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
    <nav>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/breaker'>Breaker</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path='/' >Home</Route>
            <Route path='/breaker' >Breaker</Route>
          </Routes>
        </div>
      </BrowserRouter>
    </nav>
    </>
  )
}

export default App;
