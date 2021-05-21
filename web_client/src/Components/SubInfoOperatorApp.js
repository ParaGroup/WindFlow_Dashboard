import React from 'react'
import { Card, Descriptions} from 'antd';

//TODO capire che è sto componente

export default function SubInfoOperatorApp(props){
  var windowParameters = props.windowParameters
  var body = isWindow(windowParameters);


  return (
    <Card style={{backgroundColor:'white', marginLeft:'50px'}}>
        {body}
    </Card>
  )
}


function isWindow(windowParameters){
  var items = (
    <div style={{width:'100%'}}>
    <Descriptions title="Window parameter" style={{backgroundColor:'white'}} extra="prova" column={4}>
        <Descriptions.Item label="Type">{windowParameters.window_type}</Descriptions.Item>
        {windowParameters.window_type === 'time-based'?<Descriptions.Item label="Delay">{windowParameters.lateness}</Descriptions.Item> : undefined}
        <Descriptions.Item label="Length">{windowParameters.window_length}</Descriptions.Item>
        <Descriptions.Item label="Slide">{windowParameters.window_slide}</Descriptions.Item>
    </Descriptions>
    </div>
  )

  return items
}