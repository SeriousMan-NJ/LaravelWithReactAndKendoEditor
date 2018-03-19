import React, { Component } from 'react'

class App extends Component {
  render() {
    const { title, content } = this.props
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              {title}
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
