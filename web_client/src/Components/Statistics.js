import React from 'react'
import {Card, Statistic} from 'antd';


export default function Statistics(props){
  return(
    <Card style={{width:'80%', marginLeft:'auto', marginRight:'auto', maxWidth:'200px', minWidth:'150px', borderRadius:'10px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'}}>
      
      <Statistic
        title={props.title}
        value={props.value}
        valueStyle={{ color: props.color}}
      />
    </Card>
)
}