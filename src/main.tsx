import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ResetStyle from './styles/ResetStyle.ts'
import GlobalStyle from './styles/GlobalStyle.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />

    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
)
