import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Harsh Choudhary" age={25} img="https://plus.unsplash.com/premium_photo-1755883199872-2d31c8b8b012?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Nishant Choudhary" age={35} img="https://images.unsplash.com/photo-1787669622132-fcb5d6c5953a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default App
