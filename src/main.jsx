import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageHeader from './PageHeader.jsx'
import Background from './components/Background'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Background/>
    <PageHeader />
  </>
  // </React.StrictMode>,
)
