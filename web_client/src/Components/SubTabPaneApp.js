import React from 'react'
import { Tabs } from 'antd';
import SubTableOperatorApp from './SubTableOperatorApp';
import ReplicasRealTimeStatisticsTabPane from './ReplicasRealTimeStatisticsTabPane'
import InputOutputRate from './Replicas Statistics/Historical Statistics/InputOutputRate'

const { TabPane } = Tabs;

export default function SubTabPaneApp(props){
  const component = (
    <div>
      <Tabs 
        defaultActiveKey="1" 
        centered 
        style={{
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)', 
          borderRadius:'10px', 
          paddingBottom:'25px',
          backgroundColor: 'white'
        }}
        animated={true}
      >

        <TabPane tab="Replicas" key="1">
          <SubTableOperatorApp record={props.record} interrupted={props.interrupted}/>
        </TabPane>

        <TabPane tab="Real-time statistics" key="2">
          <ReplicasRealTimeStatisticsTabPane record={props.record} />
        </TabPane>

        <TabPane tab="Historical statistics" key="3">
          <InputOutputRate record={props.record} idApp={props.idApp} idOperator={props.idOperator}/>
        </TabPane>
      </Tabs>
    </div>
  );
  return (
    component
  );
}