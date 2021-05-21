import React from 'react'
import { Card, Descriptions, Divider, Typography, Tag, Skeleton } from 'antd'

const { Text } = Typography;


export default function InfoApp(props){
  var paramStatic = props.infoStatic;
  var paramDynamic = props.infoDynamic;

  var color = 'green';
  var status = paramDynamic.status;

  if(!paramDynamic.finishTime){
    status = paramDynamic.status;
    color = 'geekblue'
  }
  else if(paramDynamic.interrupted){
    status = "INTERRUPTED"
    color = "volcano"
  }

  var statusTitle = <Tag color={color} key={"status"} style={{borderRadius:'20px'}}>{status}</Tag>

  var title = (
    <div>
      <Text>{paramStatic.idApp}</Text>
      <Divider type="vertical" />
      <Text>{paramStatic.name}</Text>
      <Divider type="vertical" />
      <Text>{statusTitle}</Text>
    </div>
  )

  var description = (
  <Descriptions title={title} column={3}>
    
    <Descriptions.Item label="Mode">{paramStatic.mode}</Descriptions.Item>
    <Descriptions.Item label="Operators number">{paramStatic.operatorNumber}<Divider type="vertical" />{paramStatic.threadNumber} threads</Descriptions.Item>
    <Descriptions.Item label="Dropped tuples">{paramDynamic.droppedTuples}</Descriptions.Item>

    <Descriptions.Item label="Start time">{paramStatic.startTime}</Descriptions.Item>
    <Descriptions.Item label="End time">{paramDynamic.finishTime ? paramDynamic.finishTime : '-'}</Descriptions.Item>
    <Descriptions.Item label="Duration">{paramDynamic.duration}</Descriptions.Item>

    <Descriptions.Item label="Backpressure">{paramStatic.backpressure}</Descriptions.Item>
    <Descriptions.Item label="Non-blocking">{paramStatic.nonBlocking}</Descriptions.Item>
    <Descriptions.Item label="Thread pinning">{paramStatic.threadPinning}</Descriptions.Item>

    <Descriptions.Item label=" Memory usage (RSS)">{bytesToSize(paramDynamic.rss_size_kb*1024,2)}</Descriptions.Item>
    
  </Descriptions>)
  
  var body = (paramDynamic.status === undefined) ? <Skeleton active round={true} /> : description
  
  
  return(
    <Card 
      style={{borderRadius:'10px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'}}
    >
     {body}
    </Card>

  )
}


function bytesToSize(bytes, precision){  
  var kilobyte = 1024;
  var megabyte = kilobyte * 1024;
  var gigabyte = megabyte * 1024;
  var terabyte = gigabyte * 1024;

  if ((bytes >= 0) && (bytes < kilobyte)) {
      return bytes + ' B';

  } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
      return (bytes / kilobyte).toFixed(precision) + ' KB';

  } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
      return (bytes / megabyte).toFixed(precision) + ' MB';

  } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
      return (bytes / gigabyte).toFixed(precision) + ' GB';

  } else if (bytes >= terabyte) {
      return (bytes / terabyte).toFixed(precision) + ' TB';

  } else {
      return bytes + ' B';
  }
}