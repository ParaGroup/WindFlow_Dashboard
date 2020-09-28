import React from 'react'
import {ReactComponent as WFlogo} from '../Icon/WindFlow_logo.svg'
import { Link } from 'react-router-dom';


export default function HeaderButton(){
  return(
      <Link to="/dashboard">
        <button className="button-header">
          <div>
            <WFlogo className="button-header-logo"/>
            <span className="button-header-text">WindFlow dashboard</span>
          </div>
        </button>
      </Link>
  )
}