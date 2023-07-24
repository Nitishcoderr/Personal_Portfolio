import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Project from './component/Projects/Project';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/projects' element={<Project/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
