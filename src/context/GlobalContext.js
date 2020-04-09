import React from 'react'

/**
 * Here we create a context to use as a global state.
 * In the "GlobalState" component we must name these as they are named here
 */
export default React.createContext({
  // This is a state with initial value of ''
  globalJoke: '',
  // This is a function to handle the global joke
  handleGlobalJoke: () => {}
})
