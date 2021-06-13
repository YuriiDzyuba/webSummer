import React from "react"
import disc from "../../images/circle.svg"

const Index4th = ({state}) => {
  console.log(state,"state")
  return (
    <div className="index4th">
      <div className="container">
        <div className="row">
          {state.map((elem, i) => (
            <div key={i} className="col-4 d-flex align-items-stretch">
              <div className="index4th__column">
                    <h5>{elem.header}</h5>
                    <p >{elem.p}</p>
                    <div className="d-flex flex-row align-items-start index4th__columnDetails">
                      <div className="col-4 d-flex justify-content-center">
                        <img src={elem.img} alt="disc"/>
                      </div>
                      <div className="col-8">
                        <h6>{elem.header2}</h6>
                        <p>{elem.p2}</p>
                      </div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index4th
