import React, { Component } from 'react'
import initFirebase from 'services/firebase'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`
class Layout extends Component {
  state = {
    firebase: false,
    authenticated: false,
  }

  componentDidMount() {
    const firebase = initFirebase() // Inits firebase for everypage
    this.setState({ firebase })

    // firebase.auth().onAuthStateChanged(user => {
    //   if (!user) {
    //     this.setState({ authenticated: false })
    //   } else {
    //     this.setState({ authenticated: true })
    //   }
    // })
  }

  render = () => {
    const { firebase, authenticated } = this.state
    const { children } = this.props
    if (!firebase) return null
    //  Update to add signin
    return (
      <Wrapper>
        <h3>Gatsby + Firebase</h3>
        {authenticated ? children : children}
      </Wrapper>
    )
  }
}

export default Layout
