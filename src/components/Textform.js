import React, { useState } from 'react'

export default function Textform(props) {
    const handlUpClick = () => {
        let newText = text.toUpperCase();
        updateTextHere(newText)
    }

    const handlLowClick = () => {
        let newText = text.toLowerCase();
        updateTextHere(newText)
    }


    const handlUpFirstClick = () => {
        let newText = text.replace(/\b(\w)/g, s => s.toUpperCase());
        updateTextHere(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        updateTextHere(newText.join(" "))
    }


    const handleOnChange = (event) => {
        console.log('onChange');
        updateTextHere(event.target.value)
    }

    const handleCopy = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
    }
    const [text, updateTextHere] = useState("Enter text here");
    return (
        <>
            <div className="mb-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className='my-3'>{props.heading} </h1>
                <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? '#212529' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} my-2 ms-2`} onClick={handlUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} my-2 ms-2`} onClick={handlLowClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} my-2 ms-2`} onClick={handlUpFirstClick}>Convert to Uppercase First Letter</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} my-2 ms-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} my-2 ms-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox to preview it here.."}</p>
            </div>
        </>
    )
}
