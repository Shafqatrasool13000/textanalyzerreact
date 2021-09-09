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
        alert('Converted to UpperCase', 'success')
    }
    //    Conver state variable "text" into Lower Case
    const convertLower = () => {
        setText(text.toLowerCase())
        alert('Converted to LowerCase', 'success')

    }
    //    Remove state variable "text" data 
    const removeText = () => {
        setText('');
        alert('Clear Text', 'success')
    }
    //Check length for Essay
    const essay = document.getElementById('essay');

    const forEssay = () => {
        if (text.length > 400 && text.length < 700) {
            essay.innerHTML = ` <strong> Essay:</strong> OK for Essay`
        } else {
            essay.innerHTML = ` <strong> Essay:</strong>  Need more data`
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
       
        alert('Copied to clipborad', 'success')

    }
    //Remove Extra Spaces 
    const handleSpaces = () => {
        let newText = (text.split(/[ ]+/));
        setText(newText.join(" "))
        alert(' Remove Extra Spaces', 'success')
    }
    const { heading, mode, alert } = props;

    return (
        <>
            <div className="container my-3 " style={{ color: `${mode === "light" ? '#0d2f51' : 'white'}` }}>
                <h2 className='mb-3'>{heading}</h2>
                <textarea className="form-control " style={{ backgroundColor: `${mode === "light" ? 'white' : '#7b6a6a'}`, color: `${mode === "light" ? 'black' : 'white'}` }} id="textBox" rows="8" value={text} onChange={textAreaInput}  ></textarea>
                <div className="mt-4">
                    <button disabled={text.length === 0} className="btn btn-primary me-2 " onClick={convertUpper}>Convert UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-warning me-2" onClick={convertLower}>Convert LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-secondary m-2" onClick={forEssay}>For Essay</button>
                    <button disabled={text.length === 0} className="btn btn-danger m-2" onClick={removeText}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-dark" onClick={handleSpaces}>Remove Exta Spaces</button>
                </div>
            </div>
            <div className="container" style={{ color: `${mode === "light" ? '#0d2f51' : 'white'}` }} >
                <p>Time to read <b>{0.008 * text.split(' ').filter((ele) => { return ele.length !== 0 }).length}</b></p>
                <h3>Your text Summary</h3>

                <p><b>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length}</b> words and <b>{text.length}</b> Characters</p>
                <p id='essay'></p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}

export default TextForm
