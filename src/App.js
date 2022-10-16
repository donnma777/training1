import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Blog from './Blog';
import Profile from './page/Profile';
import Home from './page/Home';
import From from './page/From';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* <Route path={`/`} element={<Blog />} /> */}
          <Route path={`/`} element={<Home />} />
          <Route path={`/Profile`} element={<Profile />} />
          <Route path={`/From`} element={<From />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;