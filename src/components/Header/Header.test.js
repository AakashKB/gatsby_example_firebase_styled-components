import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Header from './index'

afterEach(cleanup)

test('<Header>', () => {
  const { queryByText } = render(<Header>Hello</Header>)
  const header = queryByText('Hello')
  expect(header).toBeTruthy()
  expect(header.outerHTML).toContain('</h1>')
})
