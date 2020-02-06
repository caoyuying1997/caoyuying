import React, { Component } from 'react';
import './Header.css';
import { Divider } from 'antd';

class Header extends Component {
    render() {
        return (
            <div className = 'header'>
                <img alt="img" src="http://login.qingmengtech.com/images/3.png?imageView2/1/w/80/h/80"/>
                <div>
                    <Divider type="vertical" style={{width: '100%', height: '1px'}} />
                </div>
                
            </div>
        );
    }
}

export default Header;