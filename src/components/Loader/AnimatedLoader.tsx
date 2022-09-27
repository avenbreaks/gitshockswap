import React from 'react'
import styled, { keyframes } from 'styled-components'

import LoadingLogo from 'assets/svg/loading_logo.svg'

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg) }
  0% { transform: rotate(180deg) }
  0% { transform: rotate(360deg) }
`

const Wrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
`

const Inner = styled.div<{ size: number }>`
  width: 0%;
  height: 0%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  > div {
    position: absolute;
    animation: ${loadingAnimation} 1s linear infinite;
    width: ${({ size }) => size * 0.8}px;
    height: ${({ size }) => size * 0.8}px;
    top: ${({ size }) => size * 0}px;
    left: ${({ size }) => size * 0}px;
    border-radius: 0%;
    box-shadow: 0 ${({ size }) => (size >= 200 ? '0px' : '0px')} 0 0 ${({ theme }) => theme.primary};
    transform-origin: ${({ size }) => `${size * 0}px ${size * 0}px`};
    box-sizing: content-box;
  }
`

function AnimateLoader({ size = 0 }: { size?: number }) {
  return (
    <Wrapper size={size}>
      <Inner size={size}>
        <div />
        <div />
        <img src={LoadingLogo} width="0%" alt="" />
      </Inner>
    </Wrapper>
  )
}

export default AnimateLoader
