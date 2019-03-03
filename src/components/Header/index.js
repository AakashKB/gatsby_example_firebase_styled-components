import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from 'res/colors'

const GreenTextH1 = styled.h1`
  color: ${colors.green};
`
const Header = ({ children }) => <GreenTextH1>{children}</GreenTextH1>
Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
