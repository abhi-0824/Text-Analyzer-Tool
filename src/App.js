 import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React ,{useState} from 'react'

function App( ) {
   
  const [mode, setmode] = useState('light')

  const togglemode=()=>{
    
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor='#043168'
      showalert("Dark Mode is enabled","success")
    }

    else
    {
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light Mode is enabled","success")
    }
    
  }


  const [alert, setalert] = useState(null)
  
  const showalert=(message,type)=>{
     
    setalert(
      {
        msg:message,
        type:type
      }
    )

    setTimeout(() => {
       setalert(null)
    }, 1500);

  }

 




  return (
     <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>

      <Alert alert= {alert}   />

       <div className="container my-3">
        <Textform heading="Enter the text below :" mode={mode} showalert={showalert}/>

        {/* <About/> */}
      </div>
       
      
     </>
  );
}

export default App;
