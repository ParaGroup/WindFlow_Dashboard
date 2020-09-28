import React from 'react'
import { Layout, Divider } from 'antd';
import HeaderButton from '../Components/HeaderButton'
import ServerStatusHeader from '../Components/ServerStatusHeader'
import SwitchApplication from '../Components/SwitchApplications'
import {ReactComponent as Unipi_logo} from '../Icon/unipi_logo.svg'


const { Header, Content, Footer } = Layout;

class LayoutPage extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{ minHeight:'100vh'}} hasSider={false}>
        <Header style={{position: 'fixed', width:'100%', zIndex: 1, backgroundColor:'#05335F', paddingLeft:'20px', paddingTop: '6px'}}>
            <div className='right-elements-header'>
              <ServerStatusHeader serverStatus={this.props.serverStatus} />
              <Divider type="vertical" style={{backgroundColor:"white", top:10}}/>
              <SwitchApplication appSwitch={this.props.appSwitch} pushAppSwitcher={this.props.pushAppSwitcher}/>
            </div>
            <HeaderButton />
        </Header>
        <Content 
          style={{ padding: '55px', minHeight: 280, marginTop:64 }}
        >
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor:'#05335F', padding:'0px'}}><Unipi_logo /></Footer>
      </Layout>
    );
  }
}

export default LayoutPage;