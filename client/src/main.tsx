import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { initThree } from './startup/initThree.ts'
import { startThree } from './startup/startThree.ts'

const three = initThree()
startThree(three)

let scroll = 0

const moveCamera = () => {
  scroll = document.body.getBoundingClientRect().top
  three.camera.position.z = scroll * -0.01
  three.camera.position.x = scroll * -0.0002
  three.camera.position.y = 10 + scroll * -0.0002
}

document.body.onscroll = moveCamera

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App scrollPosition={scroll} />
  </React.StrictMode>
)
