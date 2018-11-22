import './home.css';
import React from 'react';

//引入路由组件
import {
    BrowserRouter as Router,
    Route,
    // Switch,
    Link
} from 'react-router-dom';

//页面跳转
import Desktop from "../component/desktop" //桌面首页
import Chart from "../component/chart" //图表
import Table from "../component/table" //表格
import Upload from "../component/upload" //上传

//引入主页组件
import {
    Layout,
    Menu,
    Icon,
    Button
} from 'antd';
const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;

class Home extends React.Component {
    render() {
        return (
            <Router>    
            <Layout style={{ background: '#000',height:'100%'  }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                    <div className="logo">
                        React&nbsp;Backstage
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to={`${this.props.match.url}`}>
                                <Icon type="windows" />
                                <span className="nav-text">desktop</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/chart">
                                <Icon type="pie-chart" />
                                <span className="nav-text">chart</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/table">
                                <Icon type="hdd" />
                                <span className="nav-text">table</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/upload">
                                <Icon type="thunderbolt" />
                                <span className="nav-text">upload</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff'  }} className="out">
                        <div>
                            <Button type="primary" ghost>退出</Button>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 630 }}>
                            <Route exact path="/" component={Desktop}/>
                            <Route exact path="/chart" component={Chart}/>
                            <Route exact path="/table" component={Table}/>
                            <Route exact path="/upload" component={Upload}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Router>
        );
    }
}

export default Home;