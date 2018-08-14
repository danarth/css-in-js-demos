import React from 'react'
import {createRenderer} from 'fela'
import {createComponent, Provider} from 'react-fela'

const renderer = createRenderer()

const wrapperRule = props => ({
  padding: '4em',
  background: 'papayawhip'
})

const Wrapper = createComponent(wrapperRule, 'section')

const titleRule = props => ({
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'palevioletred'
})

const Title = createComponent(titleRule, 'h1')

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with fela</Title>
  </Wrapper>
)

export default props => (
  <Provider renderer={renderer}>
    <MyComponent />
  </Provider>
)
