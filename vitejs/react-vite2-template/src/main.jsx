import React from 'react'
import ReactDOM from 'react-dom'
import * as routerDom from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import Route from './routes/route'

console.log(routerDom)
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
