import React, { useEffect } from 'react'
// import axios from 'axios'
import axios from './axios'
const App = () => {
  // async function Apicall() {
  //   const response= await fetch(" https://v2.jokeapi.dev/categories");
  //   const data= await response.json();
  //   console.log(data);

  async function Apicall() {
    const response= await axios.get("/categories");
    console.log(response)
  }
  useEffect(()=>{
    Apicall();
  },[])
  return (
    <div>
      <h1>
        Welcome to API
      </h1>
      <button onClick={Apicall}>APICALL</button>
    </div>
  )
}

export default App
