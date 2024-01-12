

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './View/pages/home';
import NavBar from "./View/components/layout/navbar";
import Contact from "./View/pages/contact";


function App() {
  return (
  <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact/" element={<Contact />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
