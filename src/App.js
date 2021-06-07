import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Home from './componet/home'
import Skill from './componet/skill'
import Project from './componet/project'
import Contact from './componet/contact'
import CapitalQuizz from './componet/pages/capitalquizz'
import NextDestination from './componet/pages/nextdestination'
import KeepUp from './componet/pages/keepup'
import Imazon from './componet/pages/imazon'
import EasternUnion from './componet/pages/easternunion'
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
        <div className = 'top'>
            <h1 className = 'name'>Abdulrazaq (Rz) Alagbada </h1>
            <h3 className = 'title'>A Full Stack Developer</h3>
        </div>
      <Navbar />

      <Route path = '/home' exact render = {() =>{
        return <Home/>
      }}/>

      <Route path = '/skill' exact render = {() =>{
        return <Skill/>
      }}/>

      <Route path = '/project' exact render = {() =>{
        return <Project/>
      }}/>

      <Route path = '/contact' exact render = {() =>{
        return <Contact/>
      }}/>

      <Route path = '/capitalquizz' exact render = {() =>{
        return <CapitalQuizz/>
      }}/>

      <Route path = '/nextdestination' exact render = {() =>{
        return <NextDestination/>
      }}/>

      <Route path = '/keepup' exact render = {() =>{
        return <KeepUp/>
      }}/>

      <Route path = '/imazon' exact render = {() =>{
        return <Imazon/>
      }}/>

    <Route path = '/easternunion' exact render = {() =>{
        return <EasternUnion/>
      }}/>

    </div>
  );
}

export default App;
