import React, { useRef } from 'react'
import {
  CustomWindow,
  getPositionOnWindowCenter,
  getPositionOnScreenCenter,
  isPromise,
} from '../utils'

import Icon from './icons/icon'
import { CustomProps } from '../types'

export type Props<LinkOptions> = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof CustomProps<LinkOptions>
> &
  CustomProps<LinkOptions>

const SocialShareButton = <LinkOptions,>({
  onShareWindowClose,
  windowHeight = 400,
  windowPosition = 'windowCenter',
  windowWidth = 550,
  blankTarget = false,
  beforeOnClick,
  disabled,
  networkLink,
  onClick,
  url,
  openShareDialogOnClick,
  opts,
  children,
  forwardedRef,
  networkName,
  style,
  round,
  bgColor,
  size = 64,
  borderRadius = 0,
  iconFillColor,
  buttonTitle,
  color,
  ...rest
}: Props<LinkOptions>) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const openShareDialog = (link: string) => {
    const windowConfig = {
      height: windowHeight,
      width: windowWidth,
      ...(windowPosition === 'windowCenter'
        ? getPositionOnWindowCenter(windowWidth, windowHeight)
        : getPositionOnScreenCenter(windowWidth, windowHeight)),
    }

    CustomWindow(link, windowConfig, blankTarget, onShareWindowClose)
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const link = networkLink(url, opts)

    if (disabled) {
      return
    }

    event.preventDefault()

    if (beforeOnClick) {
      const returnVal = beforeOnClick()

      if (isPromise(returnVal)) {
        await returnVal
      }
    }

    if (openShareDialogOnClick) {
      openShareDialog(link)
    }

    if (onClick) {
      onClick(event, link)
    }
  }

  const newStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    outline: 'none',
    ...style,
  }

  return (
    <button
      aria-label={rest['aria-label'] || networkName}
      onClick={handleClick}
      ref={forwardedRef || buttonRef}
      style={newStyle}
    >
      {buttonTitle ? (
        buttonTitle
      ) : (
        <Icon
          network={networkName}
          background={bgColor}
          color={color}
          borderRadius={borderRadius}
          round={round}
          size={size}
        />
      )}
    </button>
  )
}

SocialShareButton.defaultProps = {
  disabledStyle: { opacity: 0.6 },
  openShareDialogOnClick: true,
  resetButtonStyle: true,
}

export default SocialShareButton
