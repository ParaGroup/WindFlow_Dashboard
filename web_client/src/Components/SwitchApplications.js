import React, { useState } from 'react'
import { Drawer, Tooltip ,Tag } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function SwitchApplication(props){

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    }

    var arrayAppSwitch = props.appSwitch;

    return (
      <>
        <Tooltip placement="bottomRight" title={"App switcher"}>
          <Tag  icon={<SwapOutlined style={{display: 'block', margin:'5px',}} />} color="orange" onClick={showDrawer} style={{top:4, position:'relative', padding:0, lineHeight:'normal', height:25, margin:0, borderRadius:50 }}/>
        </Tooltip>
        <Drawer
          title="LAST 5 APP SEEN"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
        <div>
        <div className="switch-application-legend">ID&nbsp;&nbsp;&nbsp;NOME APP</div>
          {
            arrayAppSwitch.map(item =>{
              return (
                <Link key={item.id} to={`/app/${item.id}`}>
                    <p onClick={onClose} className="switch-application-row">&#8226;&nbsp;&nbsp;{item.id}&nbsp;&nbsp;{item.name}</p>
                </Link>
              )
            })
          }
        </div>
        </Drawer>
      </>
    );
}