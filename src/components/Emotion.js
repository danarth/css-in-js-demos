import React from 'react'
import { css } from 'emotion'

const Wrapper = props => (
  <div className={css`
    padding: 4em;
    background: palevioletred;  
  `}>
    {props.children}
  </div>
)

const Title = props => (
  <h1 className={css`
    font-size: 1.5em;
    text-align: center;
    color: papayawhip;
  `}>
    {props.children}
  </h1>
)

const MyComponent = props => (
  <Wrapper>
    <Title>This component was written with emotion</Title>
  </Wrapper>
)

export default MyComponent
