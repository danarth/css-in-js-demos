import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with styled-components</Title>
  </Wrapper>
)

export default MyComponent
