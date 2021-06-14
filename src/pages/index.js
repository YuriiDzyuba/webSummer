import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexTop from "../components/indexTop/IndexTop"
import Index2nd from "../components/index2nd/Index2nd"
import Index3th from "../components/index3th/Index3th"
import Index4th from "../components/index4th/Index4th"
import BackGroundPic from "../components/BackGroundPic"
import background5th from "../images/index4th.jpg"
import background7th from "../images/index5th.jpg"
import play from "../images/play.svg"
import fastForward from "../images/fast-forward.svg"
import globe from "../images/globe.svg"
import disc from "../images/circle.svg"
import code from "../images/code.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"
import facebook from "../images/facebook.svg"
import github from "../images/github.svg"
import { useState } from "react"


const IndexPage = () => {

  const [state, setState] = useState({
    Index2nd: {
      pic: disc,
      header: " 2 Niti dicta distinctio doloremque earum",
      p: ["ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe.", "ipisicing elit. Adipisci, commodi cupiditate dolor dolore dolorum earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe."],
      underHeader: "",
      underPic: ""
    },
    Index3th: [
      {
        img: play,
        header: " 3 Fpisili sinqua",
        p: ["icing elit. nulla quidem repellat repellendus sequ Adipisci, commodi cupiditate dolor dolore dolorumearum enim hic, illum in nih", "Lorem ipsum ectetur adiicing elit. Adipisci, commodi cupiditate dolor dolore dolorum\n" +
        "earum enim hic, illum in nihil nullat repellendus sequi sint? Autem neque numquam saepe."],
        border: false
      },
      {
        img: fastForward,
        header: "className",
        p: ["g elit. Adipisci, commodi cupiditate dolor dolore dolorum", "earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe"],
        border: false
      },
      {
        img: globe,
        header: "repellat repellendu",
        p: ["earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe", "earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saep"],
        border: false
      }
    ],
    Index4nd: {
      pic: "",
      header: "4 ",
      p: ["sicing elit. Adipisci, commodi cupiditate dolor dolore dolorumearum enim hic, illum in nihil nu", "sicing elit. Adipisci, commodi cupiditate dolor dolore dolorumearum enim hic, illum in nihil nu"],
      underHeader: "",
      underPic: ""
    },
    Index4a: [
      {
        img: disc,
        header: "4 repellat repellendu",
        p: ["earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe", "earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saep"],
        header2: "repellat ",
        p2: ["earum enim hicic, illum llendus sequi sint?quam saep"]
      },
      {
        img: disc,
        header: "repellat repellendu",
        p: ["earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe", "earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saep"],
        header2: "repellat ",
        p2: ["earum enim hicic, illum llendus sequi sint?quam saep"]

      },
      {
        img: disc,
        header: "repellat repellendu",
        p: ["earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saepe", "earum enim hic, illum in nihil nulla quidem repellat repellendus sequi sint?quam saep"],
        header2: "repellat ",
        p2: ["earum enim hicic, illum llendus sequi sint?quam saep"]

      }
    ],
    Index6nd: {
      pic: "",
      header: "6 What exactly do we do",
      p: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "],
      underHeader: "",
      underPic: ""
    },
    Index8nd: {
      pic: code,
      header: "",
      p: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "],
      underHeader: "David Johnson",
      underPic: ""
    },
    Index9th: [
      {
        img: "",
        header: "sdads",
        p: ["l nulla quidem repellat repellend"],
        border: true
      },
      {
        img: "",
        header: "sdadasd",
        p: ["llum in nihil nulla quidem repellat repellendus "],
        border: true
      },
      {
        img: "",
        header: "sdasda",
        p: ["nihil nullat repellendus sequi sin"],
        border: true
      }
    ]
  })

  return (

    <Layout >
      <Seo title="Home"/>
      <IndexTop/>
      <Index2nd state={state.Index2nd}/>
      <Index3th state={state.Index3th}/>
      <Index2nd state={state.Index4nd}/>
      <Index4th state={state.Index4a}/>
      <BackGroundPic background={background5th} minHeight="40vh"/>
      <Index2nd state={state.Index6nd}>
        <>
          <div className="row d-flex justify-content-center">
            <div className="col-2 borderBottom"/>
          </div>
          <div className="index2nd__links">
            <Link to="/page-2/">Left</Link>
            <Link to="/page-2/">Middle</Link>
            <Link to="/page-2/">Right</Link>
            <Link to="/page-2/">Right</Link>
          </div>
        </>
      </Index2nd>
      <BackGroundPic background={background7th} minHeight="50vh"/>
      <Index2nd state={state.Index8nd}/>
      <Index3th state={state.Index9th}/>
      <Index2nd state={state.Index8nd}>
        <div className="index2nd__links">
          <button type="button" className="btn btn-secondary rounded-circle m-2 p-2"><img src={instagram}/></button>
          <button type="button" className="btn btn-secondary rounded-circle m-2 p-2"><img src={youtube}/></button>
          <button type="button" className="btn btn-secondary rounded-circle m-2 p-2"><img src={facebook}/></button>
          <button type="button" className="btn btn-secondary rounded-circle m-2 p-2"><img src={github}/></button>
        </div>
      </Index2nd>
    </Layout>
  )
}

export default IndexPage
