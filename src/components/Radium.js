import React from 'react'
import Radium from 'radium'

const styles = {
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred'
  },
  wrapper: {
    padding: '4em',
    background: 'papayawhip'
  }
}

let Wrapper = props => (
  <section style={[styles.wrapper]}>
    { props.children }
  </section>
)

Wrapper = Radium(Wrapper)

let Title = props => (
  <h1 style={[styles.title]}>
    { props.children }
  </h1>
)

Title = Radium(Title)

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with radium</Title>
  </Wrapper>
)

export default MyComponent
