import React from 'react'
import Avatar from '../../Atoms/Avatar'
import styled from '@emotion/styled'

const PersonCardContainer = styled.div(
  () => {
    return `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      height: 100px;
      font-family: Open Sans, sans-serif;
      position: relative;
      background-color: #f0f0f0;
    `
  }
)

const AvatarContainer = styled.div(
  () => {
    return `
      position: absolute;
      left: 20px;
      top: 50px;
      transform: translate(-50%, -50%);
      z-index: 1;
    `
  }
)

const PersonDetailsContainer = styled.div<{ isHidden?: boolean }>(
  ({ isHidden }) => {
    let colors = `
      background-color: #f0f0f0;
    `
    if (isHidden) {
      colors = `
        background-color: #84c489;
      `
    }
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 16px;
      gap: 8px;
      ${colors};
      padding: 30px 95px;
      width: 100%;
      margin: 0;
    `
  }
)

const PersonName = styled.h1(
  () => {
    return `
      font-size: 32px;
      font-weight: 600;
      margin: 0px;
      width: 100%;
    `
  }
)

const PersonEmail = styled.p(
  () => {
    return `  
      font-size: 14px;
      font-weight: 400;
      margin: 0px;
      width: 100%;
    `
  }
)

const HiddenDetail = styled.div<{ isSmall?: boolean }>(
  ({ isSmall }) => {
    return `
      margin: 0px;
      width: 100%;
      min-width: 200px;
      width: 100%;
      height: ${isSmall ? '16px' : '30px'};
      background-color: #a5e0aa;
    `
  }
)

type Indicator = 'online' | 'away' | 'busy'

interface PersonCardProps {
  name: string
  email: string
  imageUrl?: string
  vanity?: boolean
  indicator?: Indicator
  isHidden?: boolean
}

const PersonCard = ({ name, email, imageUrl, indicator, vanity, isHidden }: PersonCardProps) => {
  
  // Gets the first character from the name and sets that as initial
  const initial = name.charAt(0)
  
  return (
    <PersonCardContainer>
      <AvatarContainer>
        <Avatar initial={initial} imageUrl={imageUrl} indicator={indicator} isHidden={isHidden} vanity={vanity} />
      </AvatarContainer>
      <PersonDetailsContainer isHidden={isHidden}>
        {isHidden ? (
          <>
            <HiddenDetail />
            <HiddenDetail isSmall />
          </>
        ) : (
          <>
            <PersonName>{name}</PersonName>
            <PersonEmail>{email}</PersonEmail>
          </>
        )}
      </PersonDetailsContainer>
    </PersonCardContainer>
  )
}

export default PersonCard
