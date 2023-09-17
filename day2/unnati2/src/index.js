import React from 'react';
import ReactDOM from 'react-dom/client';
function Booklist(){
    return(
        <>
       {/*props=html attrubutes*/} 
        <Book img='https://m.media-amazon.com/images/I/816mUSrIprL._AC_UY218_.jpg' Author="shree krishna" Bookname="Mahabharat"/>
        <Book img='https://m.media-amazon.com/images/I/71ZGznGgRDL._AC_UY218_.jpg' Author="shree ram" Bookname="Bhagwat gita"/>
</>
    )
}
function Book(props){  //props=object{name:"unnati",age:"12",experience="2"}
                       //propsfrombook={img:"url",author:"string"}
                       //
    return(
    <>
    <img src={props.img}></img>
    <Author name={props.Author}/>      {/*prop drilling*/}
    <h1>{props.Bookname}</h1>
    {/*<Author/>
    <Bookname/>*/}
    </>
    )
}
function Author(props){
 return(
     <h1>{props.name}</h1>
    )
 }
// function Bookname(){
    // return(
    // <h1>mahabharat</h1>
    // )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)
  


