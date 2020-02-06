import React from 'react';
import { Row, Col } from 'antd';

import Nav from './components/Nav/Nav'
import './App.css'
import Header from './components/Header/Header'
import IRoute from './router/index'

function App() {
  return (
    <div className="App">
      <Row>
      <Col span={4} className ="_left">
       <Nav/> 
      </Col>
      <Col span={20} className = "_right">
        <Header/>
        <div>
          <IRoute/>
        </div>
      </Col>
    </Row>
    </div>
  );
}

export default App;
