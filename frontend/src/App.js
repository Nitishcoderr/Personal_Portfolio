import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home.js';
import Header from './component/Header/Header';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
