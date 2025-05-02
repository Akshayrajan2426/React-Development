import React, { useContext } from 'react'
import Roles from './roles'
import { ThemeContext } from './App';


const attendance=({theme})=>{
    const contextValue=useContext(ThemeContext);    
    const textStyle={
        backgroundcolor:theme ==="light"?"white":"black",
        color:theme ==="light"?"black":"white"
    }
    return (
        <div>
            <h1 style={textStyle}>Attendance</h1>
            <Roles />
        </div>
      )

}
 

export default attendance