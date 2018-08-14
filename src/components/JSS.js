import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

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

const {classes} = jss.createStyleSheet(styles).attach()

const Wrapper = props => (
  <section className={classes.wrapper}>
    {props.children}
  </section>
)

const Title = props => (
  <h1 className={classes.title}>
    {props.children}
  </h1>
)

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with JSS</Title>
  </Wrapper>
)

export default MyComponent
