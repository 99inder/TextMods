import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Textbox(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());

        if (text !== "")
            props.showAlert("Text has been converted to Upper Case", "success");
        else
            props.showAlert("Text area is empty", "warning");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());

        if (text !== "")
            props.showAlert("Text has been converted to Lower Case", "success");
        else
            props.showAlert("Text area is empty", "warning");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Textbox has been cleared", "success");
    }

    const handleCapClick = () => {

        const newText = text.split(" ");

        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
        }

        const str2 = newText.join(" ");
        setText(str2);

        if (text !== "")
            props.showAlert("Text has been Capitalized", "success");
        else
            props.showAlert("Text area is empty", "warning");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div>
                {/*textarea*/}
                <div className="mb-3">
                    {/* <label htmlFor="Textbox" className="form-label">Example textarea</label> */}
                    {/* <h1>{props.heading}</h1> */}
                    <textarea className="form-control my-2" id="Textbox" placeholder={props.placeholder} value={text} rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }}></textarea>
                </div>

                {/*Buttons*/}
                <div>
                    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCapClick}>Capitalize First Word</button>
                    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy to Clipboard</button>
                    <button className="btn btn-danger mx-2 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>

                </div>
            </div>

            {/*Text Summary*/}
            <div className="my-4">
                <h2>Your Text Summary:</h2>
                <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</b></p>
            </div>

            {/*Preview area*/}
            <div>
                <hr />
                <h2>Preview:</h2>
                {text === '' ? "Type something in the box above to see the preview." : text}
                <hr />
            </div>
        </>
    )
}


Textbox.propTypes = {
    placeholder: PropTypes.string
}

Textbox.defaultProps = {
    placeholder: "Text Here"
}