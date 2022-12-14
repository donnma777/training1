import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './page/Profile';
import Home from './page/Home';
import From from './page/From';
import Test from './page/test';
import NotFound from './page/NotFound';
import FormComplete from './components/FormComplete';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/Profile`} element={<Profile />} />
          <Route path={`/From`} element={<From />} />
          <Route path={`/Test`} element={<Test />} />
          <Route path={`/FormComplete`} element={<FormComplete />} />
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;