import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../views/Home/Home'
import Banner from '../views/Banner/Banner'
import Teacher from '../views/Teacher/Teacher'

class IRoute extends Component {
    render() {
        return (
            <div>
                <Route path = '/home' component = {Home}/>
                <Route path = '/banner' component = {Banner}/>
                <Route path = '/teacher' component = {Teacher}/>
            </div>
        );
    }
}

export default IRoute;