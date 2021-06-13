import React from "react"
import disc from "../../images/circle.svg"

const Index2nd = (props) => {
  return (
    <div className="container-fluid index2nd">
      <div className="d-flex flex-row justify-content-center">
        <div className="col-8 index2nd__description">
          {props.state.pic ? <img src={props.state.pic}/> : null}
          {props.state.header ? <h4>{props.state.header}</h4> : null}
          {props.state.p.length ? props.state.p.map((e,i)=>(
            <p key={i}>{e}</p>
          )): null}
          {props.state.underHeader ? <h5>{props.state.underHeader}</h5> : null}
          {props.state.underPic ? <img src={props.state.underPic}/> : null}
          {props.children ? props.children : null}
        </div>
      </div>
    </div>
  )
}

export default Index2nd
