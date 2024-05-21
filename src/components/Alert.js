import React from 'react'

const Alert = (props) => {
   
    const capitalize=(text)=>{
   
        let word=text.toLowerCase()
        
        let char=word.charAt(0).toUpperCase()
    
        return char+word.slice(1)
    
    
    
      }



  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}  
   
</div>
    
  )
}

export default Alert
