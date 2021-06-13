import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Box from "../components/Box"
import { Canvas } from "@react-three/fiber"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Canvas camera={{ position: [0, 0, 300] }} style={{width:"100%", height:"600px"}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[100, 0, 0]} />
      <Box position={[-150, 1, 0]} />
    </Canvas>
    <div className="overlay">
      <h1>dfsdfdsfsdfsdf</h1>
    </div>
  </Layout>
)

export default SecondPage
