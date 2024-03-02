import { Canvas, useFrame, useThree } from '@react-three/fiber'

import { Model } from './Heart'
import { Environment, Html, Sparkles } from '@react-three/drei'
import Nav from './Nav'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About'
import Team from './Team'

export default function App() {
  return (
    <>
    <Router>
    <Nav/> 
      <Routes>
        <Route
          path="/"
          element={
            <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1,background:"#000" }}  camera={{ position: [0, -3.2, 40], fov: 12 }}>
              <Model />
            </Canvas>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
    </>
  )
}
