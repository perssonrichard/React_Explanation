import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

/**
 * This is a GlobalState component which are to be wrapped around the whole App.
 */
const GlobalState = props => {
  // Here we create the global state which refers to the values inside "GlobalContext.js"
  const [globalJoke, setGlobalJoke] = useState('This is a joke passed down from GlobalState')

  // This function is to be passed down to all other components so that they can change the global joke.
  const handleGlobalJoke = value => setGlobalJoke(value)

  return (
    // The "Provider" is the syntax to be used when creating a global state
    // Here we pass everything we want down to the other components
    <GlobalContext.Provider value={{
      globalJoke,
      handleGlobalJoke
    }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
