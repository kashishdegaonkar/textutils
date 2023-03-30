import React, { useState } from "react";


export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("upper case button was clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to uppercase!", "success");
  }; 

  const handleLoClick = () => {
    // console.log("lower case button was clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
  }; 

  const handleClearClick = () => {
    // console.log("clear text button was clicked." + text);
    let newText = "";
    setText(newText);
  };

  const handleSentenceClick = () => {
     // console.log("sentence case button was clicked." + text);
     let newText
     newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };


  const handleCopyClick = () => {
    // console.log("copy text button was clicked." + text);
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value); 
 };


 const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
 };


   const handleOnChange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };


  
    let wordVariable = text.split(" ").length; 
    let charVariable =  text.length;
  

  return (
    <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#3a3f42'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'?'#758894':'white', color: props.mode==='dark'?'white':'#3a3f42'}} 
            id="myBox" 
            rows="8">
            </textarea>
        </div>
        <button className="btn btn mx-2 custom-color" onClick={handleUpClick}>
           convert to uppercase
        </button>
        <button className="btn btn mx-2 custom-color" onClick={handleLoClick}>
          convert to lowercase
        </button>
        <button className="btn btn mx-2 custom-color" onClick={handleClearClick}>
          clear text
        </button> 
        <button className="btn btn mx-2 custom-color" onClick={handleSentenceClick}>
          convert to sentence-case
        </button> 
        <button className="btn btn mx-2 custom-color" onClick={handleCopyClick}>
          copy text to the clipboard
        </button> 
        <button className="btn btn mx-2 custom-color" onClick={handleExtraSpacesClick}>
          remove extra-spaces
        </button>
      </div>

      <div className="container my-3" 
      style={{color: props.mode==='dark'?'white':'#3a3f42'}}>
        <h2>your text summary</h2>
         <p> {wordVariable -1} words and {charVariable} characters</p> 
        
        <p>{0.008 * wordVariable} mintues to read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
