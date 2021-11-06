import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
      props.showAlert('Converted to uppercase','success');
    }
    const handleLowClick = ()=>{
        // console.log("uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
      props.showAlert('Converted to lowercase','success');

    }
    const handleClearClick = ()=>{
        setText("")
      props.showAlert('Text has been cleared','success');

    }
    
    const handleUndoClick = ()=>{
        let mybox = document.getElementById('mybox');
        let text = mybox.value;
        let newText = text.slice(0,-1);
        setText(newText) 
      props.showAlert('Last character removed','success');

    }
    const handleCopyClick = ()=>{
        let copyText = document.getElementById('mybox')
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
      props.showAlert('Text copied to clipboard','success');

    }
    const handleExtraSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      props.showAlert('Extra spaces removed','success');

    }
    // const wordCount=()=>{
    //     let mybox = document.getElementById('mybox');
    //     let mytext = mybox.value;
    //     let newText = mytext.split(/[ ]+/);
    //     newText.join(" ");
    //     return newText.length;
    // }
    // console.log(wordCount())

    const handleOnChange = (event)=>{
        // console.log("uppercase was clicked")
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-3">
            <h1 style={{color:props.mode==='dark' ? 'white':'#02203d'}}>{props.heading}</h1>
            <div className="nb-3 my-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? '#08296a':'white',color:props.mode==='dark' ? 'white':'#02203d'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>To Lower</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To Upper</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUndoClick}>Undo</button>
        </div>
        <div className="container my-3"style={{color:props.mode==='dark' ? 'white':'#02203d'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>Required {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this text.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something In The Textbox To Preview It."}</p>
        </div>
        </>
    )
}
