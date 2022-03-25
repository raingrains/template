import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import './main.less'
import RouteDom from './routes/route'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RouteDom />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
