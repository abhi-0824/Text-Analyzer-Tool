import React,{useState} from 'react'

const Textform = (props) => {

    const handleonchange =(event)=>{
        setText(event.target.value)
    }
    
    const upperonclick=()=>
    {
        let newtext=text.toUpperCase();
        setText(newtext)

        props.showalert("Converted to Uppercase!","success")
    }

    const loweronclick=()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lowercase!","success")
    }

    function word(text)
    {
        if(text==="")
        return 0;
      
        else
        {
          return text.split(" ").length;
        }
      

    }

    const reverseonclick=()=>{
    
      let newtext=text.split('').reverse().join('');
      setText(newtext) 

      props.showalert("String is reversed!","success")

    }

    const clearonclick=()=>{
    
       
      setText('') 

      props.showalert("Cleared!","success")

    }

    const copyonclick=()=>{
      
      let text=document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value)
      
      props.showalert("Copied to clipboard!","success")


    }

    const removeonclick=()=>
    {
      let newtext=text.split(/[ ]+/)
     setText(newtext.join(" "))

     props.showalert("Extra spaces removed!","success")





    }
    


    const [text,setText]=useState("");

    // text="newtext" ; //wrong way to change the state
    //setText("newtext"); //correct way to change the state
 

 return (

    <> 

        <div className="container " style={{color: (props.mode==='dark')?'white':'black'}}>

        <h1 >{props.heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="8" style={{backgroundColor: (props.mode==='dark')?'grey':'white',color: (props.mode==='dark')?'white':'grey'}}></textarea>

      
           </div>

           <button className='btn btn-primary mx-1' onClick={upperonclick}>Convert to Uppercase</button>
           
           <button className='btn btn-primary mx-1' onClick={loweronclick}>Convert to Lowerrcase</button>

           <button className='btn btn-primary mx-1' onClick={reverseonclick}>Reverse it </button>

           <button className='btn btn-primary mx-1' onClick={clearonclick}>Clear</button>

           <button className='btn btn-primary mx-1' onClick={copyonclick}>Copy text</button>
          
           <button className='btn btn-primary mx-1' onClick={removeonclick}>Remove extra spaces</button>
        </div>
       
       <div className="container my-3" style={{color: (props.mode==='dark')?'white':'black'}}>
        
        <h2>Your text summary:</h2>
        <p>  {word(text)}  words and {text.length} characters</p>
        <p>{0.008*word(text)} minutes to read</p>
        <h3>Preview:</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview."}</p>


       </div>
         

        
     </>
 
  )
}

export default Textform
