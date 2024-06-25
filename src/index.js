import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './View/pages/home';
import NavBar from "./View/components/layout/navbar";
import Contact from "./View/pages/contact";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact/" element={<Contact />}/>
        </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

