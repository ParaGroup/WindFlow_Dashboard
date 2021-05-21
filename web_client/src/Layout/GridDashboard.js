import React from 'react'
import { Row, Col } from 'antd';


export default function GridDashboard(props){
  return(
    <div className="grid-dashboard">
      <Row justify="space-around" gutter={[{ xs: 1, sm: 10, md: 13, lg: 100},100]} align="middle">
        <Col span={6}>
          {props.runningApp}
        </Col>
        <Col span={6}>
          {props.terminatedApp}
        </Col>
        <Col span={6}>
          {props.interruptedApp}
        </Col>
      </Row>

      <Row gutter={[0,100]}>
        <Col span={24}>
          {props.tableRunApplication}
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{borderRadius:'200px'}}>
          {props.tableTermApplication}
        </Col>
      </Row>
    </div>
  );
  
}