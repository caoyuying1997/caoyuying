import React, { Component } from 'react';
import axios from 'axios';
import { Table, Divider } from 'antd';

// 表头信息
const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => (
        value ? <span>已上线</span> : <span>已下线</span>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div>
            <a href="#">编辑</a>
            <Divider type="vertical" />
            <a href="#">上线</a>
            <Divider type="vertical" />
            <a href="#">下线</a>
            <Divider type="vertical" />
            <a href="#">删除</a>
        </div>
      ),
    },
  ];


class Banner extends Component {
    constructor(params){
        super(params)
        this.state = {
            bannerList:[]
        }
    }
    componentDidMount(){
        axios.get('https://www.qmtech.com/getBannerList')
         .then(res =>{
            
            this.setState({
                bannerList: res.data.list
            })
            console.log(res)
            console.log('1111112111')
            
         })
         .catch(err => {
            console.log(err)
         })
    }
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.bannerList} />
            </div>
        );
    }
}

export default Banner;