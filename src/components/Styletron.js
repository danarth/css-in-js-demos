import React from 'react'
import {styled, Provider} from 'styletron-react'
import {Client} from 'styletron-engine-atomic'

const engine = new Client()

const Wrapper = styled('section', {
  padding: '4em',
  background: 'palevioletred'
})

const Title = styled('h1', {
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'papayawhip'
})

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with styletron</Title>
  </Wrapper>
)

export default props => (
  <Provider value={engine}>
    <MyComponent />
  </Provider>
)
