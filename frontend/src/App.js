import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Project from './component/Projects/Project';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getUser, loadUser } from './action/user.js';
import AdminPannel from './component/Admin/AdminPannel';
import Timeline from './component/Admin/Timeline';
import YoutubeVideo from './component/Admin/YoutubeVideo';
import AdminProjects from './component/Admin/AdminProjects';
function App() {

const dispatch = useDispatch()

const {isAuthenticated} = useSelector((state)=>state.login)
const {loading} = useSelector((state)=>state.user)


  useEffect(() => {
     dispatch(getUser())
     dispatch(loadUser())
  }, [dispatch])
  

  return (
    <Router>
      {loading? <div>loading</div> :(
        <>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/projects' element={<Project/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/account' element={isAuthenticated ? <AdminPannel/> : <Login/>} />
          <Route exact path='/admin/timeline' element={isAuthenticated ? <Timeline/> : <Login/>} />
          <Route exact path='/admin/youtube' element={isAuthenticated ? <YoutubeVideo/> : <Login/>} />
          <Route exact path='/admin/project' element={isAuthenticated ? <AdminProjects/> : <Login/>} />
        </Routes>
       
        <Footer/>
        </>
      )}
    </Router>
  );
}

export default App;
