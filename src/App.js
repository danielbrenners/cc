import React, { Component } from 'react'

import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header half height={'100px'} />
        <Header />
      </div>
    )
  }
}

export default App
