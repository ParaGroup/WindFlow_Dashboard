import React from "react";
import { Row, Col } from 'antd';


export default function GridInputOutputRate(props){
  var span = !props.chartInput_2 ? 24 : 12;
  var margin_left = 20;
  var margin_right = 20;

  return(
    <>
      <Row gutter={[0, 24]} style={{marginLeft:margin_left, marginRight:margin_right}}>
        <Col span={span} style={{height:250}} >
          {props.chartInput_1}
        </Col>
        { props.chartInput_2 ?
          <Col span={span} style={{height:250}} offset={0}>
            {props.chartInput_2}
          </Col> :
          undefined
        }
      </Row>
      <Row style={{marginLeft:margin_left, marginRight:margin_right}}>
        <Col span={span} style={{height:250}}>
          {props.chartOutput_1}
        </Col>
        { props.chartOutput_2 ?
          <Col span={span} style={{height:250}} offset={0}>
            {props.chartOutput_2}
          </Col> :
          undefined
        }
      </Row>
    </>
  )
}