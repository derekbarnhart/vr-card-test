import React from 'react'

export default (props)=>{

  return (<a-animation
            attribute="scale"
            to={props.to}
            direction="alternate"
            dur={props.dur}
            repeat="indefinite">
          </a-animation>)
}
