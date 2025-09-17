import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App";
import About from "./items/about.jsx";
import Blog from "./items/blog.jsx";
import Cart from "./items/cart.jsx";
import Contact from "./items/contact.jsx";
import Header from "./Header.jsx";

function Home() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Home