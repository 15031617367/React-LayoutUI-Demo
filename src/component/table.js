import React from "react"
import {
    Table,
    Button
} from 'antd';


class Tables extends React.Component{
    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            align:'center'
        }, 
        {
            title: '年龄',
            dataIndex: 'age',
            align:'center'
        }, 
        {
            title: '情况',
            dataIndex: 'address',
            align:'center'
        },
        {
            title: '操作',
            // dataIndex: 'operation',
            align:'center',
            render:(text,record,index)=>(
                <Button type="primary" onClick={this.test}>查看详情</Button>
            )
                
            
    
        }
    ]
    data = [
        {
            key:0,
            name:'张三',
            age:'11',
            address:'admin'
        }
    ]
    getInitialState(){
        return{
            
        }
    }
    render(){
        return (
            <div>
                <Table  columns={this.columns} dataSource={this.data}/>,
            </div>
        )
    }
    //按钮
    test(){
        // console.log(record)
    }
}
 
export default Tables