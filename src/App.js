import React from 'react';
import './App.css';

import MainPage from './Components/pages/MainPage';

import PredictionForm from "./Components/Doctor";
import LoginForm from "./Components/LoginForm";
import DocSignUpForm from "./Components/DocSignUpForm";
import GeneralUserSignUpForm from "./Components/GeneralUserSignUpForm";
import Cards from  './Components/Features/Cards';
import Footer from './Components/Footer/Footer';
import HomeSection from './Components/HomeSection/home';
import JoinUs from './Components/JoinUs/JoinUs';
import Navbar from './Components/Navgationbar'
import Team from './Components/Team/Team';
import ScrollToTopPage from './Components/ScrollToTopPage'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
     {/* <Doctor/>
      {/* <LoginForm/> */}
      {/* <h1>Holo Lab</h1>
      <DocSignUpForm/>
      <GeneralUserSignUpForm/> */}
      {/* routes for forms */}
        {/* <Navbar/> */}
        <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/' exact component={HomeSection}/>
            <Route path='/features'  component={Cards} />
            <Route path='/joinUs'  component={JoinUs}/>
            <Route path='/team'  component={Team}/> 
            <Route exact path = '/Doctor' component ={PredictionForm}/>
            <Route exact path = '/LoginForm' component ={LoginForm}/>
            <Route exact path = '/DocSignUpForm' component ={DocSignUpForm}/>
           <Route exact path = '/GeneralUserSignUpForm' component ={GeneralUserSignUpForm}/> 

        </Switch>
    </Router>
     
    </>
  );
}

export default App;
