
import { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './pages/resume/Resume';
import Blogs from './pages/blogs/Blogs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Projects from './pages/projects/Projects';
import View from './pages/blogs/View';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/suvo-portfolio" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/view/:id" element={<View />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
