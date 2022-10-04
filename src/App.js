import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Blog';
import Design from './page/Design';
import Technology from './page/Technology';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={`/`} element={<Blog />} />
          <Route path={`/Design`} element={<Design />} />
          <Route path={`/Technology`} element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;