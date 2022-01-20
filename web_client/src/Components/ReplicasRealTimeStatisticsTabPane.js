/**************************************************************************************
 *  Copyright (c) 2019- Gabriele Mencagli
 *  
 *  This file is part of WindFlow.
 *  
 *  WindFlow is free software dual licensed under the GNU LGPL or MIT License.
 *  You can redistribute it and/or modify it under the terms of the
 *    * GNU Lesser General Public License as published by
 *      the Free Software Foundation, either version 3 of the License, or
 *      (at your option) any later version
 *    OR
 *    * MIT License: https://github.com/ParaGroup/WindFlow/blob/vers3.x/LICENSE.MIT
 *  
 *  WindFlow is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *  You should have received a copy of the GNU Lesser General Public License and
 *  the MIT License along with WindFlow. If not, see <http://www.gnu.org/licenses/>
 *  and <http://opensource.org/licenses/MIT/>.
 **************************************************************************************
 */

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

