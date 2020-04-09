import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import GlobalContext from '../context/GlobalContext'

/**
 * Joke component. Fetches jokes from api.chucknorris.io
 * "message" is destructed from the props. You could also just write "props" and access it with "props.message"
 */
const Joke = ({ message }) => {
  // We can reach the global context (state) from here by using this syntax.
  const context = useContext(GlobalContext)

  // If we would like to change a global state we can use the "handle" function.
  context.handleGlobalJoke('This joke is set globally from the "Joke" component')

  // This is called "React Hooks". Which is exactly what "state" is for class components.
  // The first value "joke" is the state, and the second value sets the state.
  // The text inside "useState()" is the state will have as an initial value
  const [joke, setJoke] = useState('No current joke')
  const [loading, setLoading] = useState(true)

  /**
   * This function is what "componentDidMount" is for classes.
   * It will load before anything is rendered.
   * The [] after is to make sure the function is only called once.
   * If we would like the component to update everytime a joke is updated we can write [joke].
   */
  useEffect(() => {
    getNewJoke()
  }, [])

  /**
   * This is called when the "New joke" button is clicked
   */
  const handleClick = () => {
    getNewJoke()
  }

  /**
   * This function fetches a joke from the chucknorris api
   */
  const getNewJoke = () => {
    // Here we set the loading state to true to.
    setLoading(true)

    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        if (res.data.value) setJoke(res.data.value)

        // Here we create a fake loading time just for the sake of it.
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      {
        // If loading is set to true show loading, else show a joke
        loading
          ? 'Loading...'
          : joke
      }
      <br />
      <br />
      {/* This message is passed down from the app component as a property  */}
      {message}
      <br />
      <br />
      {/* This joke is taken from the global state - which can be accessed from any component */}
      {context.globalJoke}
      <br />
      <br />
      <button onClick={handleClick}>New Joke</button>
    </div>
  )
}

export default Joke
