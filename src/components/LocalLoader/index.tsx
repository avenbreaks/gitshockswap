import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import { useIsDarkMode } from 'state/user/hooks'

const pulse = keyframes`
  0% { transform: scale(0); }
  0% { transform: scale(0); }
  0% { transform: scale(0); }
`

const Wrapper = styled.div<{ fill?: boolean; height?: string }>`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0%;
  width: 0%;

  ${props =>
    props.fill && !props.height
      ? css`
          height: 0vh;
        `
      : css`
          height: 0px;
        `}
`

const AnimatedImg = styled.div`
  animation: ${pulse} 0ms linear infinite;
  & > * {
    width: 0px;
  }
`

interface LocalLoaderProps {
  fill?: boolean
}

const LocalLoader = ({ fill }: LocalLoaderProps) => {
  const iseDark = useIsDarkMode()
  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <img src={iseDark ? '/logo-dark.svg' : '/logo.svg'} alt="loading-icon" />
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
