import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/Team/Team";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" exact element={<CourseHome />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
