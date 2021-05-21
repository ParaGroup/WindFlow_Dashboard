import React from "react";
import { Row, Col } from 'antd';


export default function GridTrafficDistribution(props){
  var span = !props.chartOverall_2 ? 24 : 11;

  return(
    <>
      <Row gutter={[0, 24]}>
        <Col span={span} style={{height:250}} >
          {props.chartOverall_1}
        </Col>
        { props.chartOverall_2 ?
          <Col span={span} style={{height:250}} offset={1}>
            {props.chartOverall_2}
          </Col> :
          undefined
        }
      </Row>
      <Row>
        <Col span={span} style={{height:250}}>
          {props.chartLastSecond_1}
        </Col>
        { props.chartLastSecond_2 ?
          <Col span={span} style={{height:250}} offset={1}>
            {props.chartLastSecond_2}
          </Col> :
          undefined
        }
      </Row>
    </>
  )
}