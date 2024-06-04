
import { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
