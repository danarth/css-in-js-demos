import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred'
  },
  wrapper: {
    padding: '4em',
    background: 'papayawhip'
  }
})

const Wrapper = props => (
  <div className={css(styles.wrapper)}>
    {props.children}
  </div>
)

const Title = props => (
  <h1 className={css(styles.title)}>{props.children}</h1>
)

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with aphrodite</Title>
  </Wrapper>
)

export default MyComponent
