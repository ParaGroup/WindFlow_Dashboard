import React from 'react'
import { Tabs } from 'antd';
import ReplicasUtilization from './Replicas Statistics/Real-time Statistics/ReplicasUtilization'
import TrafficDistribution from './Replicas Statistics/Real-time Statistics/TrafficDistribution'

const { TabPane } = Tabs;

export default function ReplicasRealTimeStatisticsTabPane(props){
  var record = props.record;
  
  return(
    <Tabs
      animated={true}
      tabPosition="left"
    >
      <TabPane tab="Replicas utilization" key={1}>
        <ReplicasUtilization record={props.record}/>
      </TabPane>
      
      { 
        record.operator_type !== 'Source' ?
          <TabPane tab="Traffic distribution" key={2}>
            <TrafficDistribution record={props.record}/>
          </TabPane> : 
          undefined
      }
    </Tabs>
  )
}

