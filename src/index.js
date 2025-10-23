import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Discography from './pages/Discography';
import Media from './pages/Media';
import Members from './pages/Members';
import Community from './pages/Community';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="header" element={<Header />}/>
          <Route path="discography" element={<Discography />}/>
          <Route path="media" element={<Media />}/>
          <Route path="members" element={<Members />}/>
          <Route path="community" element={<Community />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
