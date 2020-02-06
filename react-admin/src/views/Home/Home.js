import React, { Component } from 'react';
import './Home.css'
import axios from 'axios'


class Home extends Component {
    constructor(params){
        super(params)
        this.state = {
            name:[]
        }
    }
    componentDidMount() {
        axios.get('https://www.qmtech.com/getBannerList')
          .then(res => {
            this.setState({
              name: res.data.list[0].name
            })
            console.log(res)
            console.log(this.state.name)
           
           
          })
          .catch(err => {
            console.log(err)
          })
      }

    render() {
        return (
            <div className = 'home'>
                <h2>{this.state.name},欢迎进入后台管理系统！</h2>
                
                <div className = 'home-img'>
                <img alt="img" src="/img/lixian.jpg"/>
                </div>
            </div>
        );
        
    }
}

export default Home;