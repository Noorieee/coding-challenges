import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div(
  () => {
    return `
      display: flex;
      position: relative;
      flex-direction: column;
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
    `
  }
)

const InputLabel = styled.label<{ isFocused: boolean, hasErrorMessage: boolean, isDisabled: boolean }>(
  ({ isFocused, hasErrorMessage, isDisabled }) => {

    let color = '#6C6C6C'

    if(hasErrorMessage && !isDisabled) {
      color = '#DD7070'
    } else if(isFocused && !isDisabled) {
      color = '#5A7BE9'
    }

    return `
      position: absolute;
      top: ${isFocused ? '0px' : '16px'};
      left: ${isFocused ? '6px' : '16px'};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: ${isFocused ? '12px' : '16px'};
      line-height: 16px;
      color: ${color};
      transition: top 0.4s ease, left 0.4s ease, font-size 0.4s ease, color 0.4s ease;
      cursor: text;
    `
  }
)

const InputField = styled.input<{ isDisabled: boolean, hasErrorMessage: boolean, }>(
  ({ isDisabled, hasErrorMessage }) => {

    let backgroundColor = '#ffffff'
    let outlineColor = '#6C6C6C'

    if(isDisabled) {
      backgroundColor = '#E9E9E9'
    } else if(hasErrorMessage) {
      backgroundColor = '#FCE9E9'
      outlineColor = '#DD7070'
    }

    return `
      background-color: ${backgroundColor};
      height: 40px;
      padding: 16px;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      width: auto;
      border: none;
      outline: 2px solid ${outlineColor};
      cursor: ${isDisabled ? 'not-allowed' : 'text'};

      :focus {
        outline: 2px solid ${hasErrorMessage ? '#DD7070' : '#5A7BE9'};
      }
    `
  }
)

const ErrorContainer = styled.div(
  () => {
    return `
      display: flex;
      flex-direction: row;
      gap: 2px;
      align-items: center;
      margin-top: 6px;
    `
  }
)

const ErrorIcon = styled.div(
  () => {
    return `
      color: #DD7070;
    `
  }
)

const ErrorText = styled.p(
  () => {
    return `
      color: #6C6C6C;
      font-family: 'Hind', sans-serif;
      font-size: 12px;
      margin: 0;
    `
  }
)

interface InputProps {
  id: string
  label: string
  onChange: (value: string) => void
  value: string
  isDisabled?: boolean
  errorMessage?: string
}

const Input = ({ id, label, onChange, value, isDisabled = false, errorMessage }: InputProps) => {

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Passing the updated input value to the parent
    onChange(event.target.value)
  }

  return (
    <Container>
      {/* disabled attribute specifies that the input field should be disabled */}
      {/* Turns the error message to its boolean value e.g. truthy falsey */}
      <InputLabel htmlFor={id} hasErrorMessage={!!errorMessage} isDisabled={isDisabled} isFocused={isFocused || value.length > 0}>{label}</InputLabel>
      <InputField type="text" id={id} value={value} hasErrorMessage={!!errorMessage} isDisabled={isDisabled} disabled={isDisabled} onFocus={handleFocus} onBlur={handleOnBlur} onChange={handleOnChange} />

      {errorMessage ?
        <ErrorContainer>
          <ErrorIcon>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </ErrorIcon>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorContainer>
        : null}
    </Container>
  )
}

export default Input
