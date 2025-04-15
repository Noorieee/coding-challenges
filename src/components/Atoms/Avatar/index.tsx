import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faQuestion, IconDefinition, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import santaHat from '../../../../public/santa-hat.png'


const Container = styled.div(
  () => {
    return `
      position: relative;
    `
  }
)

const AvatarInitial = styled.p(
  () => {
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-family: 'Nunito sans', sans-serif;
      text-align: center;
      color: #000000;
      font-weight: 600;
      color: #ffffff;
      background-color: #18ac24;
      border-radius: 50%;
      border: 8px solid #ffffff;
      width: 48px;
      height: 48px;
      padding: 20px;
      margin: 0px;
    `
  }
)

const AvatarImageContainer = styled.div<{ imageUrl: string }>(
  ({ imageUrl }) => {
    return `
    border-radius: 50%;
    border: 8px solid #ffffff;
    width: 48px;
    height: 48px;
    object-fit: cover;
    padding: 20px;
    background-image: url("${imageUrl}");
    background-size: cover;
  `
  }
)

const HiddenContainer = styled.div(
  () => {
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 8px solid #84c489;
      font-size: 32px;
      background-color: #18ac24;
      width: 48px;
      height: 48px;
      padding: 20px;
    `
  }
)

const IndicatorContainer = styled.div<{ indicator: string }>(
  ({ indicator }) => {

    // Making an object 
    const iconColorMap: Record<string, string> = {
      'online': 'green',
      'away': 'yellow',
      'busy': 'red'
    }

    const color = iconColorMap[indicator]

    return `
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -5px;
      right: 0px;
      border-radius: 50%;
      background-color: ${color};
      border: 4px solid #ffffff;
    `
  }
)

const VanityImage = styled.img(
  () => {
    return `
      position: absolute;
      top: -27px;
      right: -10px;
      transform: scale(1.5);
    `
  }
)

interface AvatarProps {
  initial: string
  indicator?: 'online' | 'away' | 'busy'
  imageUrl?: string
  isHidden: boolean
  vanity?: boolean
}

const Avatar = ({ initial, indicator, imageUrl, isHidden, vanity }: AvatarProps) => {
  if (initial.length > 1) {
    throw new Error("Too many characters for initial prop. Must be 1.");
  }

  if (!isNaN(Number(initial))) {
    throw new Error("Numbers are not accepted.")
  }

  const iconMap: Record<string, IconDefinition> = {
    'online': faCheck,
    'away': faQuestion,
    'busy': faMinus
  }

  const icon = indicator ? iconMap[indicator] : ''

  let whatToShow = <AvatarInitial>{initial}</AvatarInitial>

  if (isHidden) {
    whatToShow = (
      <HiddenContainer>
        <FontAwesomeIcon icon={faEyeSlash} />
      </HiddenContainer>
    )
  } else if (imageUrl) {
    whatToShow = <AvatarImageContainer imageUrl={imageUrl} />
  }

  return (
    <Container>
      {whatToShow}

      {/* Captured undefined check  */}
      {indicator ?
        (<IndicatorContainer indicator={indicator}>
          <FontAwesomeIcon icon={icon as IconProp} />
        </IndicatorContainer>) : null
      }

      {vanity ? <VanityImage src={santaHat}></VanityImage> : null}

    </Container>
  )
}

export default Avatar