import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Win from './pages/Win'
import List from './pages/List'

const App = () => {

  return(
    <main>
      <Router>
        <Route exact path="/" component={() =><List/>}/>
        <Route exact path="/bet" component={() =><Win/>}/>
      </Router>
    </main>
  )
}

export default App;
