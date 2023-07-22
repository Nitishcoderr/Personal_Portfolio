import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
