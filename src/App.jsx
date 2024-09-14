import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import { useContext, useEffect } from "react";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {

  const { theme } = useContext(ContextGlobal)

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : 'dark';
  }, [theme]);
  

  return (
      <div className="">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
