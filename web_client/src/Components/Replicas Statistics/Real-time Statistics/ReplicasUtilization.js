import React from 'react'
import { Progress, List } from 'antd';


export default function ReplicasUtilization(props){
  var data = [];
  var margin;
  
  if(props.record.configuration !== "PF_WMR"){
    var replicas = props.record.replicas;
    data = parseReplicas(data,replicas, undefined);
    margin=55
  }
  else{
    var replicas_1 = props.record.replicas_1;
    var replicas_2 = props.record.replicas_2;
    
    data = parseReplicas(data,replicas_1,props.record.name_stage_1)
    data = parseReplicas(data,replicas_2,props.record.name_stage_2)

    margin=30;
  }
  
  
  return (
    <>
      <h2 className="title-statistic">Average replicas utilization</h2> {/*TODO cambiare colore*/}
      <List 
        grid={{ gutter: 16, column: 5 }}
        dataSource={data}
        renderItem={item => {
          var strokeColor = '#1890ff'
          
          if(item.usage >=33 && item.usage < 66) strokeColor = '#F39E23';
          else if(item.usage > 66) strokeColor = '#F32222';
          
          return(
            <List.Item>
              <div>
              <Progress percent={item.usage} type="dashboard" strokeWidth={5} strokeColor={strokeColor}/>
              <div style={{marginLeft:margin, fontWeight:'bold'}}>{item.id}</div>
              </div>
            </List.Item>
          )
        }}
        style={{marginRight:24}}
      />
    </>
  )
}

function parseReplicas(data,replicas,name_stage){

  for(var i in replicas){
    var object = {
      id: name_stage ? replicas[i].Replica_id+" - "+name_stage : replicas[i].Replica_id,
      usage: Number.parseFloat((replicas[i].Service_time_usec/replicas[i].Eff_Service_time_usec)*100).toFixed(2),
    }
    data.push(object);
  }

  return data;
}