import React, { useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div(
  () => {
    return `
        display: flex;
        flex-direction: column;
        font-family: verdana;
        width: 100%;
    `
  }
)

const TextAreaLabel = styled.label(
  () => {
    return `
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
    `
  }
)

// Adding resize prop to control the resizing of the text area
const TextArea = styled.textarea<{ resize: Resize }>(
  ({ resize }) => {
    return `
        background-color: #f5f5f5;
        font-size: 14px;
        font-family: verdana;
        border-radius: 4px;
        padding: 8px;
        resize: ${resize};
    `
  }
)

const Counter = styled.p(
  () => {
    return `
        font-size: 14px;
        text-align: right;
        margin: 2px 0;
        margin-top: 8px;
    `
  }
)

const CounterContainer = styled.div(
  () => {
    return `
        display: flex;
        gap: 8px;
        flex-direction: row;
        justify-content: flex-end;
    `
  }
)

type Resize = 'none' | 'both' | 'horizontal' | 'vertical'

// Defining properties / states that the component can accept
// Included union type for resize to accept one of four resize options
interface TextareaWithCounterProps {
  rows?: number
  label: string
  resize?: Resize
  counter?: 'word' | 'character' | 'none' | 'both'
}

const TextareaWithCounter = ({ rows = 1, label, resize = 'none', counter = 'character' }: TextareaWithCounterProps) => {
  // Holds the current value of the input; changing it will re-render this component
  const [textAreaValue, setTextAreaValue] = useState('')

  // Updates the state whenever the textarea value changes
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value)
  }

  // Renders a label, a textarea to type in, and a character count that dynamically updates as the user types below it.
  // TextArea Breakdown:
  // `value={textAreaValue}` binds the input to React state so it updates as the user types
  // `rows={rows}` sets the height of the textarea (number of visible text lines)
  // `resize={resize}` is passed as a property to control whether the user can resize the textarea
  return (
    <Container>
      <TextAreaLabel htmlFor="textbox">{label}</TextAreaLabel>
      <TextArea id="textbox" onChange={handleOnChange} value={textAreaValue} rows={rows} resize={resize} />
      
      {/* If the counter property is not set to show none then display the counter container on the page */}
      {counter !== 'none' ? (
        <CounterContainer>
          {counter === 'character' || counter === 'both' ? <Counter>Count: {textAreaValue.length}</Counter> : null}
          {counter === 'word' || counter === 'both' ? <Counter>Word Count: {textAreaValue.split(' ').filter(Boolean).length}</Counter> : null}
        </CounterContainer>
      ) : null}
    </Container>
  )
}

export default TextareaWithCounter