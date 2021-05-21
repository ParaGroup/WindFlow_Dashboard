import React from 'react'
import { Row, Col } from 'antd'

export default function GridApp(props){
  return(
    <div className="">
      <Row gutter={[0,100]}>
        <Col span={24}>
          {props.infoApp}
        </Col>
      </Row>

      <Row justify="space-around" align="middle" gutter={[0,100]}>
        <Col span={24}>
          {props.graph}
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          {props.table}        
        </Col>
      </Row>
    </div>
  )
}