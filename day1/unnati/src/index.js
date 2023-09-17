import React from 'react';
import ReactDOM  from 'react-dom/client';


function Greetings(){
  return(
    <>
    <h1>hello world</h1>
    <h2>unnati</h2>
    <h3>COMPONENT</h3>
    </>

  )

  
}
const chintu=ReactDOM.createRoot(document.getElementById('root'))
chintu.render(<Greetings/>)//self closing tag:we can not use it where we have to write a content inside
function Jainism(){
  return(
    <>
    <h1>mahaveer</h1>
    <h2>paras</h2>
    </>
  )
}
const religion=ReactDOM.createRoot(document.getElementById('root'))
religion.render(<Jainism/>)




