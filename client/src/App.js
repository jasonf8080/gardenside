import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components/main"
import { Home, About, Menu, Checkout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

export default App;
