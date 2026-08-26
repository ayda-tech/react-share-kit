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

const resetStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  font: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
}

const SocialShareButton = <LinkOptions,>({
  onShareWindowClose,
  windowHeight = 400,
  windowPosition = 'windowCenter',
  windowWidth = 550,
  blankTarget = false,
  beforeOnClick,
  disabled,
  disabledStyle = { opacity: 0.6 },
  networkLink,
  onClick,
  url,
  openShareDialogOnClick = true,
  opts,
  children,
  forwardedRef,
  networkName,
  style,
  resetButtonStyle = true,
  round,
  bgColor,
  size = 64,
  borderRadius = 0,
  iconFillColor,
  iconStyle,
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
    if (disabled) {
      return
    }

    event.preventDefault()

    const link = networkLink(url, opts)

    if (beforeOnClick) {
      const returnVal = beforeOnClick()

      if (isPromise(returnVal)) {
        await returnVal
      }
    }

    if (openShareDialogOnClick) {
      if (link.startsWith('mailto:')) {
        window.location.href = link
      } else {
        openShareDialog(link)
      }
    }

    if (onClick) {
      onClick(event, link)
    }
  }

  const newStyle: React.CSSProperties = {
    ...(resetButtonStyle ? resetStyle : {}),
    ...style,
    ...(disabled ? disabledStyle : {}),
  }

  return (
    <button
      type="button"
      aria-label={networkName}
      {...rest}
      onClick={handleClick}
      ref={forwardedRef || buttonRef}
      style={newStyle}
      disabled={disabled}
    >
      {buttonTitle ? (
        buttonTitle
      ) : children !== undefined ? (
        children
      ) : (
        <Icon
          network={networkName}
          background={bgColor}
          color={color ?? iconFillColor}
          borderRadius={borderRadius}
          round={round}
          size={size}
          style={iconStyle}
        />
      )}
    </button>
  )
}

export default SocialShareButton
