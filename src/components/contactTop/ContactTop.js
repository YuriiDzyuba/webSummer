import React from "react"
import background from "../../images/contactTopImg.jpg"

const ContactTop = () => {
  return (
    <div className="container-fluid contactTop" style={
      {
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      <div className="container">
        <div className="d-flex flex-row justify-content-center m-4 p-4">
            <h1>Some of our numbers</h1>
        </div>
        <div className="row ">
          <div className="col-4 p-3">
            <h4 className="pb-4">Welcome to React-Static</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem blanditiis consectetur cumque
              enim
              eum exercitationem quia sed unde voluptates? Adipisci est explicabo facere, impedit labore nemo
              provident quasi sunt.</p>
            <h5 className="pb-4">Welcome to React-Static</h5>
          </div>
          <div className="col-4 p-3">
            <h4 className="pb-4">Welcome to React-Static</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem blanditiis consectetur cumque
              enim
              eum exercitationem quia sed unde voluptates? Adipisci est explicabo facere, impedit labore nemo
              provident quasi sunt.</p>
            <h5 className="pb-4">Welcome to React-Static</h5>
          </div>
          <div className="col-4 p-3">
            <h4 className="pb-4">Full Template</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem blanditiis consectetur cumque
              enim
              eum exercitationem quia sed unde voluptates? Adipisci est explicabo facere, impedit labore nemo
              provident quasi sunt.</p>
            <h5 className="pb-4">Welcome to React-Static</h5>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactTop
