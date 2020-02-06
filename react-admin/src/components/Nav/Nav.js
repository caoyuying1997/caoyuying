import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
class Nav extends Component {
    constructor(params){
        super(params)
       
    }
    
    render() {
        return (
            <div>
                <Menu
                    theme = 'dark'
                    mode="inline"
                >
                    {
                        menuList.map(obj =>(
                            obj.children ?(
                                <SubMenu
                                    key={obj.path}
                                    title={
                                        <span>
                                        <Icon type={obj.icon} />
                                        <span>{obj.title}</span>
                                        </span>
                                    }
                                >
                                {obj.children.map(obj =>(
                                    <Menu.Item key={obj.path}>
                                        <Link to = {obj.path}>
                                            <span>{obj.title}</span>
                                        </Link>
                                    </Menu.Item>
                                ))}
                                </SubMenu>
                            

                            ) :(
                                <Menu.Item key={obj.path}>
                                    <Link to = {obj.path}>
                                        <Icon type={obj.icon} />
                                        <span>{obj.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        ))
                    }
                   
                </Menu>
            </div>
        );
    }
}

export default Nav;