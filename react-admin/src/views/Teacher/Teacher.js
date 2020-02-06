import React, { Component } from 'react';
import { Table } from 'antd';


const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Sex', dataIndex: 'sex', key: 'sex' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: '哇哈哈',
      age: 32,
      sex: '男',
      
    },
    {
      key: 2,
      name: '喜之郎',
      age: 42,
      sex: '女',
     
    },
    {
      key: 3,
      name: '百事',
      age: 32,
      sex: '男',
     
    },
  ];

class Teacher extends Component {
    constructor(params){
        super(params)
    }
    render() {
        return (
            <div>
                <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                />
            </div>
        );
    }
}

export default Teacher;