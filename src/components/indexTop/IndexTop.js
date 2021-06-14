import React from "react"
import background from "../../images/nomeTopImg.jpg"

const IndexTop = () => {
  return (
    <div className="container-fluid indexTop" style={{ background: `url(${background})`, backgroundSize: "cover" }}>
      <div className="container">
        <div className="row ">
          <div className="col-6 indexTop__left">
            <h1>Welcome to React-Static</h1>
          </div>
          <div className="col-6 indexTop__right">
            <h1 >Full Template</h1>
            <div className="d-flex flex-row justify-content-end">
              <div className="col-3 borderTop pb-4"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem blanditiis consectetur cumque
              enim
              eum exercitationem quia sed unde voluptates? Adipisci est explicabo facere, impedit labore nemo
              provident quasi sunt.</p>
            <button type="button" className="btn btn-secondary btn-lg ">read more</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default IndexTop
