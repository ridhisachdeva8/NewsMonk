import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px" }}>
        <img src={loading} alt="loading" style={{ maxWidth: "100%", maxHeight: "100%" }}/>
      </div>
    )
  }
}

export default Spinner
