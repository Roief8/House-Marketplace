import React from "react"
import spinner from "../assets/jpg/loading.gif"

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <div className="spinnerContainer">
        <img
          src={spinner}
          className="text-center mx-auto"
          alt="Loading..."
        ></img>
      </div>
    </div>
  )
}

export default Spinner
