import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalState from './context/GlobalState'

/**
 * This is the starting point of the application which renders everything.
 */
ReactDOM.render(
  <React.StrictMode>
    {/* Here we wrap the global state around the App */}
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
)
