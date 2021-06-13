import React from "react"
import disc from "../../images/circle.svg"


const Index3th = ({ state }) => {
  console.log(state,"state")
  return (
    <div className="container-fluid index3th">
      <div className="container">
        <div className="row g-5">
          {state.map((e,i)=>(
            <div key={i} className="col-4 index3th__description">
              <div className={e.border ? "borderLeft" : null}>
                {e.img ? <img src={e.img}/> : null}
                <h5>{e.header}</h5>
                {e.p ? e.p.map((elem, index)=>(
                  <p key={index}>{elem}</p>
                )) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index3th
