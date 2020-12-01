import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Process from './components/Process';
import Preloader from './components/Preloader';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';
import Menu from './components/Menu';
import Top from './components/Top';

function App() {
  return (
    <>
    <Preloader/>
    <Navbar/>
    <Home/>
    <Process />
    <About />
    <Service />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <Clients />
    <Footer />
    <CopyRight />
    <Menu />
    <Top />

    </>
  );
}

export default App;
