import React from 'react'
import loading from './loading.gif'
const Spinner =()=> {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px" }}>
        <img className="my-3" src={loading} alt="loading" style={{ maxWidth: "100%", maxHeight: "100%" }}/>
      </div>
    )
}

export default Spinner
