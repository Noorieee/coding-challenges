import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div(
  () => {
    return `
      padding: 20px;
      border: red 1px solid;
      border-radius: 10px;
      background-color: maroon;
      color: white;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
    `
  }
)

interface ExampleCompProps {
  title?: string
}

const ExampleComp = ({ title = 'Example Comp' }: ExampleCompProps) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export default ExampleComp
