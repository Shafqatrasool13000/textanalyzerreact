import React from 'react'

const Alert = (props) => {
    const {alert}=props;
    const captilize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
        alert && <>
         <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captilize(alert.type)} ! </strong> {alert.msg}
  
</div>   

        </>
    )
}

export default Alert
