import React, { useState } from 'react'

const TextForm = (props) => {
    
    const [text, setText] = useState('');
    //    Add user input to state variable "text"
    const textAreaInput = (event) => {
        const userInput = event.target.value;
        setText(userInput);
    }
    //    Conver state variable "text" into Upper Case
    const convertUpper = () => {
        setText(text.toUpperCase())
        alert('Converted to UpperCase' ,'success')
    }
    //    Conver state variable "text" into Lower Case
    const convertLower = () => {
        setText(text.toLowerCase())
        alert('Converted to LowerCase' ,'success')

    }
    //    Remove state variable "text" data 
    const removeText = () => {

        setText('')
    }
    //Check length for Essay
    const essay = document.getElementById('essay');

    const forEssay = () => {

        if (text.length > 400 && text.length < 700) {
            essay.innerHTML = `Length ${text.length} OK for Essay`
        } else {
            essay.innerHTML = `Length ${text.length} enter more data`
        }
    }
    const handleCopy = () => {
        const Inputtext = document.getElementById('textBox');
        Inputtext.select();
        
        navigator.clipboard.writeText(text)
       

    }
    //Remove Extra Spaces 
    const handleSpaces = () => {
        
        let newText = (text.split(/[ ]+/));
        
        setText(newText.join(" "))

    }
    
    const {heading,mode,alert}=props;
    
    return (
        <>
            <div className="container my-3 " style={{color:`${mode==="light"?'#0d2f51':'white'}`}}>
                <h2 className='mb-3'>{heading}</h2>
                <textarea className="form-control " style={{backgroundColor:`${mode==="light"?'white':'grey'}`,color:`${mode==="light"?'black':'white'}`}} id="textBox" rows="8" value={text} onChange={textAreaInput}  ></textarea>
                <div className="mt-4">
                    <button className="btn btn-primary me-2 " onClick={convertUpper}>Convert UpperCase</button>
                    <button className="btn btn-warning me-2" onClick={convertLower}>Convert LowerCase</button>
                    <button className="btn btn-secondary m-2" onClick={forEssay}>For Essay</button>
                    <button className="btn btn-danger m-2" onClick={removeText}>Remove Text</button>
                    <button className="btn btn-danger m-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-dark" onClick={handleSpaces}>Remove Exta Spaces</button>
                </div>
            </div>
            <div className="container" style={{color:`${mode==="light"?'#0d2f51':'white'}`}} >
                <p>Time to read <b>{0.008 * text.split(' ').length}</b></p>
                <h3>Your text Summary</h3>
                <p><b>{text.length>=1?text.split(' ').length:0}</b> words and <b>{text.length}</b> Characters</p>
                <h5 id='essay'></h5>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Type Some Text in text Area'}</p>
            </div>
        </>
    )
}

export default TextForm
