import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Course from './components/Course'
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Link to ="/">首页</Link> |
      <Link to ="/about">关于我们</Link> |
      <Link to ="/course">课程列表</Link> |
      <Link to ="/nav">导航菜单</Link> 


      <Route path = '/' component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/course' component = {Course}/>
      <Route path = '/nav' component = {Nav}/>
      
    </div>
  );
}

export default App;
