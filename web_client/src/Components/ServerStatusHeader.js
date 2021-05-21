import React from 'react'
import { Badge } from 'antd'

export default function ServerStatusHeader(props){
  var status = props.serverStatus ? <Badge style={{color:'white'}} status="success" text="SERVER CONNECTED" /> : <Badge style={{color:'white'}} status="error" text="SERVER NOT CONNECTED" /> ;
        

  return(
    <div className="server-status-header">
      {status}
    </div>
  )
}