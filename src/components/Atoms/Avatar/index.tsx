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

const BaseContainer = styled.div(
  () => {
    return `
      border: 8px solid #ffffff;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      padding: 20px;
    `
  }
)

const AvatarInitial = styled(BaseContainer)(
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
    `
  }
)

const AvatarImageContainer = styled(BaseContainer)<{ imageUrl: string }>(
  ({ imageUrl }) => {
    return `
      object-fit: cover;
      background-image: url("${imageUrl}");
      background-size: cover;
    `
  }
)

const HiddenContainer = styled(BaseContainer)(
  () => {
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      border: 8px solid #84c489;
      font-size: 32px;
      background-color: #18ac24;
    `
  }
)

const IndicatorContainer = styled.div<{ indicator: Indicator }>(
  ({ indicator }) => {

    // Object map that maps the indicator status' to colors
    const iconColorMap: Record<Indicator, string> = {
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

type Indicator = 'online' | 'away' | 'busy'

interface AvatarProps {
  initial?: string
  indicator?: Indicator
  imageUrl?: string
  isHidden?: boolean
  vanity?: boolean
}

const Avatar = ({ initial = '', indicator, imageUrl, isHidden = false, vanity = false }: AvatarProps) => {
  // Throw an error if name and email does not exist, isHidden is false and imageUrl does not exist
  if(!initial && !isHidden && !imageUrl) {
    throw new Error("You need to have either name and email, isHidden or imageURL.")
  }

  // Throw an error if there is more than one inital
  if (initial.length > 1) {
    throw new Error("Too many characters for initial prop. Must be 1.");
  }

  // Throw an error if intial exists and if it is a number 
  if (initial && !isNaN(Number(initial))) {
    throw new Error("Numbers are not accepted.")
  }

  // Object map that maps the indicator status' to icons
  const iconMap: Record<Indicator, IconDefinition> = {
    'online': faCheck,
    'away': faQuestion,
    'busy': faMinus
  }

  const icon = indicator ? iconMap[indicator] : ''

  let whatToShow = (
    <AvatarInitial>
      <span>{initial}</span>
    </AvatarInitial>
  )

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
      {/* Captured undefined check */}
      {indicator ? (
        <IndicatorContainer indicator={indicator}>
          <FontAwesomeIcon icon={icon as IconProp} />
        </IndicatorContainer>
      ) : null}
      {vanity ? (
        <VanityImage src={santaHat} alt="santa hat" />
      ) : null}
    </Container>
  )
}

export default Avatar
