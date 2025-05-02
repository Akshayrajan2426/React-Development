import React from 'react'
import Timesheet from './timesheet'

const leave=({theme})=> {
  return (
    <div>
        <h1>Leave</h1>
        <Timesheet theme={theme}/>
    </div>
  )
}

export default leave