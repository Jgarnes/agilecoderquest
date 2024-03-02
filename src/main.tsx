import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Welcome from './Welcome.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Welcome />
    {/* <App /> */}
  </React.StrictMode>,
)
