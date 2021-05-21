import React from 'react'
import DOMPurify from 'dompurify'
import { Card, Skeleton } from 'antd'
import '../General.css'


export default function Graph(props){
  var body = props.svg === undefined ? <Skeleton active round title={false}  /> : <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.svg)}}/>;
  
  return(
    <Card
      style={{borderRadius:'10px', maxHeight:'330px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'}}
    >
      {body}
    </Card>
  )
}