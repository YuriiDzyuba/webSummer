import React from "react"

const ContactInfoBlock = (props) => {
  return (
    <div className="container-fluid contactInfoBlock">
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <div className={`col-6  p-4 ${props.state.isBackgroundImageBlockFirst ? "order-first" : "order-last"}`}>
            <div className="" style={
              {
                background: `url(${props.state.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100%"
              }}/>
          </div>
          <div
            className={`col-6 contactInfoBlock__description ${!props.state.isBackgroundImageBlockFirst ? "order-first" : "order-last"}`}>
            <div className="d-flex flex-row justify-content-center">
              <div className="col-8">
                {props.state.pic ? <img src={props.state.pic}/> : null}
                {props.state.header ? <h4>{props.state.header}</h4> : null}
                {props.state.p.length ? props.state.p.map((e, i) => (
                  <p key={i}>{e}</p>
                )) : null}
                {props.state.underHeader ? <h5>{props.state.underHeader}</h5> : null}
                {props.state.underPic ? <img src={props.state.underPic}/> : null}
                {props.children ? props.children : null}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoBlock
