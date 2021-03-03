import React from 'react'

const ValidateData = ({functionReason}) =>{
 const messageStyle={
    margin:'5px',
    color:'#19A974',
    fontSize:'15px' 
 }
 return(
    <p style={messageStyle}>
     {
        functionReason()
     }
    </p>
 )
}

export default ValidateData;
