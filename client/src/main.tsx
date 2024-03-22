import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { initThree } from './startup/initThree.ts'
import { startThree } from './startup/startThree.ts'

const three = initThree()
startThree(three)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
