import React from 'react'
import Joke from './components/Joke'

/**
 * This is the App component which just renders the "Joke" components
 */
function App () {
  // We can pass anything we want down from one component to the other.
  // This is not necessary though, since we have a global state.
  const message = 'This is from app passed as a property.'

  return (
    // The message is passed down to the "Joke" component as a property
    <Joke message={message} />
  )
}

export default App
