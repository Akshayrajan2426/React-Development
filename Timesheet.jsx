import React from 'react'
import Attendance from './attendance'

const timesheet=({theme})=> {
  return (
    <div>
        <h1>Timesheet</h1>
        <Attendance theme={theme}/>
    </div>
  )
}

export default timesheet