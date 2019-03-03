import React from 'react'
import Header from 'components/Header'
import { Link } from 'gatsby'
import FetchingExample from 'containers/fetchingExample'

export default () => (
  <div>
    <Header>Hi people</Header>
    <Link to="/page-2">Page-2</Link>
    <p>This is React + Gatsby + Firebase + Styled-Components + Jest</p>
    <p>Now go build something amazing!</p>
    <FetchingExample />
  </div>
)
