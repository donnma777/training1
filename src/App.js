import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './page/Profile';
import Home from './page/Home';
import From from './page/From';
import Test from './page/test';
import FormComplete from './components/FormComplete';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={`training1/`} element={<Home />} />
          <Route path={`training1/Profile`} element={<Profile />} />
          <Route path={`training1/From`} element={<From />} />
          <Route path={`training1/Test`} element={<Test />} />
          <Route path={`training1/FormComplete`} element={<FormComplete />} />
          <Route path={"*"} element={<div>404 ページが見つかりません。</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;