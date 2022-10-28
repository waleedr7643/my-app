import React,{useState} from 'react';

export default function TextForm(props) {

    
       const handleUpClick =()=>{ 
        // console.log("uppercase was clicked"  + text)
        setText("you have handled a set text uppercase");

        let newtext = text.toUpperCase();
        setText(newtext); 
        props.showAlert("convert to uppercase", "success")
       }

       const handleOnChange =(event)=>{ 
        // console.log("On Change")
        setText(event.target.value);
       }

       const handleLoClick =()=>{
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert("convert to lowerscase", "success")
       }

       const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
       }

  const [text, setText] = useState("");
//   text = "new text";  wrong way to change the state
//   setText("new text");
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'#0e346d'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black' }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className='container my-3' style={{color : props.mode === 'dark'?'white':'#0e346d'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <p>Preview</p>
            <p>{text.length>0?text : 'enter something inthe textbox area to preview it here'}</p>
    </div>
    </>
  )
}
