import React, { useState } from 'react';

export default function TextForm(props) {
  const [ text, setText] = useState('');   //making of a state

  const handleUpClick = ()=>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
  }

  const handleLoClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
}

const handleClearClick = ()=>{
  let newText = '';
  setText(newText)
}


    const handleOnChange = (event)=>{
      //console.log("On Change");
      setText(event.target.value)
  }

  const handleCopy=(event)=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
  }

  return (
    <>
    <div className="container" >
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes Read</p>
      <h2> Preview </h2>
      <p>{text.length>0?text : "Enter something in text box to preview it here"}</p>

    </div>
    </>
     
  )
}
