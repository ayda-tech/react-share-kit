import React, { Component } from 'react'
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

export default class SocialShareButton<LinkOptions> extends Component<
  Props<LinkOptions>
> {
  static defaultProps = {
    disabledStyle: { opacity: 0.6 },
    openShareDialogOnClick: true,
    resetButtonStyle: true,
  }

  openShareDialog = (link: string) => {
    const {
      onShareWindowClose,
      windowHeight = 400,
      windowPosition = 'windowCenter',
      windowWidth = 550,
      blankTarget = false,
    } = this.props

    const windowConfig = {
      height: windowHeight,
      width: windowWidth,
      ...(windowPosition === 'windowCenter'
        ? getPositionOnWindowCenter(windowWidth, windowHeight)
        : getPositionOnScreenCenter(windowWidth, windowHeight)),
    }

    CustomWindow(link, windowConfig, blankTarget, onShareWindowClose)
  }

  handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      beforeOnClick,
      disabled,
      networkLink,
      onClick,
      url,
      openShareDialogOnClick,
      opts,
    } = this.props

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
      this.openShareDialog(link)
    }

    if (onClick) {
      onClick(event, link)
    }
  }

  render() {
    const {
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
    } = this.props

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
        onClick={this.handleClick}
        ref={forwardedRef}
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
}
