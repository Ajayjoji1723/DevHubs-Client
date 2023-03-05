import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyProfile from './components/MyProfile';
import RegistrationSuccess from './components/Registration Succes';
import IndProfile from './components/IndoProfile';
import './App.css';

const App =()=>{
  return(
    <Router>
      <div className='App-container'>
        <Routes>
          <Route exact path = '/' element = {<Login />}/>
          <Route exact path = '/register' element = {<Register />}/>
          <Route exact path = '/registrationsuccess' element = {<RegistrationSuccess />}/>
          <Route exact path = "/home" element = {<Home />}/>
          <Route exact path = "/myprofile" element={<MyProfile/>}/>
          <Route exact path="/indprofile/:fullname/:email/:skilss/:id" element = {<IndProfile />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;