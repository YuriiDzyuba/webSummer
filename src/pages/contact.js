import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactTop from "../components/contactTop/ContactTop"
import ContactInfoBlock from "../components/contact2nd/ContactInfoBlock"
import disc from "../images/circle.svg"
import img1 from "../images/contactImg1.jpg"
import img2 from "../images/contactImg2.jpg"
import img3 from "../images/contactImg3.jpg"


const Contact = () => {
  const [state, setState] = useState({
    Index2nd: {
      backgroundImage: img1,
      isBackgroundImageBlockFirst: false,
      pic: "",
      header: " 1 Niti dicta distinctio doloremque earum",
      p: ["ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe.", "ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe."],
      underHeader: "",
      underPic: ""
    },
    Index3th: {
      backgroundImage: img2,
      isBackgroundImageBlockFirst: true,
      pic: "",
      header: " 2 Niti dicta distinctio doloremque earum",
      p: ["ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe.", "ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe."],
      underHeader: "",
      underPic: ""
    },
    Index4th: {
      backgroundImage: img3,
      isBackgroundImageBlockFirst: false,
      pic: "",
      header: " 3 Niti dicta distinctio doloremque earum",
      p: ["ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe.", "ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe."],
      underHeader: "",
      underPic: ""
    }

  })


  return (
    <Layout>
      <Seo title="Home"/>
      <ContactTop/>
      <div className={"p-4"}/>
      <ContactInfoBlock state={state.Index2nd}/>
      <ContactInfoBlock state={state.Index3th}/>
      <ContactInfoBlock state={state.Index4th}/>
      <div className={"p-4"}/>
    </Layout>
  )
}

export default Contact
