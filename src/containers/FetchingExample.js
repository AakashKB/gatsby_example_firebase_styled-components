import React, { Component } from 'react'
import fetchtest from 'services/fetchtest'

//  ToDO: add test
export default class FetchingExample extends Component {
  state = {
    test: null,
  }

  async componentDidMount() {
    this.setState({ test: await fetchtest() })
  }

  render() {
    const { test } = this.state
    if (!test) {
      return null
    }
    return (
      <div>
        <h4>Firebase test data : {test}</h4>
      </div>
    )
  }
}
