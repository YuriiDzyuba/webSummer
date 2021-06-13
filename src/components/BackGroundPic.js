import React from "react"

const BackGroundPic = ({background, minHeight}) => {
  return (
      <div className="container-fluid index4th__bottom" style={
        {
          background: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: minHeight
        }
      }/>
  )
}

export default BackGroundPic
