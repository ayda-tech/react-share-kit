//=============LINK TYPES

import { CSSProperties, Ref } from 'react'

// Email Link: TYPE
export type EmailLinkParams = {
  body?: string
  separator?: string
  subject?: string
}
// Facebook Link: TYPE
export type FacebookLinkParams = { quote?: string; hashtag?: string }
// Facebook Messenger Link: TYPE
export type FacebookMessengerLinkParams = {
  appId: string
  redirectUri?: string
  to?: string
}
// Gab Link: TYPE
export type GapLinkParams = { title?: string }
// Hatena Link: TYPE
export type HatenaLinkParams = { title?: string }
// InstaPaper Link: TYPE
export type InstaPaperLinkParams = { title?: string; description?: string }
// Line Link: TYPE
export type LineLinkParams = { title?: string }
// Linkedin Link: TYPE
export type LinkedInLinkParams = {
  title?: string
  summary?: string
  source?: string
}
// LiveJournal Link: TYPE
export type LiveJournalLinkParams = { title?: string; description?: string }
// Mailru Link: TYPE
export type MailruLinkParams = {
  title?: string
  description?: string
  imageUrl?: string
}
// Pinterest Link: TYPE
export type PinterestLinkParams = { media: string; description?: string }
// Pocket Link: TYPE
export type PocketLinkParams = { title?: string }
// Reddit Link: TYPE
export type RedditLinkParams = { title?: string }
// Telegram Link: TYPE
export type TelegramLinkParams = { title?: string }
// Tumblr Link: TYPE
export type TumblrLinkParams = {
  title?: string
  caption?: string
  tags?: string
  posttype?: 'link' | string
}
// Twitter Link: TYPE
export type TwitterLinkParams = {
  title?: string
  via?: string
  hashtags?: string[]
  related?: string[]
}
// Viber Link: TYPE
export type ViberLinkParams = { title?: string; separator?: string }
// VK Link: TYPE
export type VKShareLinkParams = {
  title?: string
  image?: string
  noParse?: boolean
  noVkLinks?: boolean
}
// Weibo Link: TYPE
export type WeiboShareLinkParams = { title?: string; image?: string }
// WhatsApp Link: TYPE
export type WhatsAppLinkParams = { title?: string; separator?: string }
// Workplace Link: TYPE
export type WorkplaceLinkParams = {
  quote?: string
  hashtag?: string
}

//======= HOC TYPES
export type SocialMediaShareCountProps =
  React.HTMLAttributes<HTMLSpanElement> & {
    children?: (shareCount: number) => React.ReactNode
    getCount: (
      url: string,
      callback: (shareCount?: number) => void,
      appId?: string,
      appSecret?: string,
    ) => void
    url: string
    appId?: string
    appSecret?: string
  }

export type StateTypes = {
  count?: number
  isLoading: boolean
}

//======= ICON TYPES
export type SocialIcon = {
  color: string
  name: string
  path: string
}

export type SocialIcons = {
  [key: string]: SocialIcon
}

//======= SOCIAL SHARE TYPES

export type NetworkLink<LinkOptions> = (
  url: string,
  options: LinkOptions,
) => string

export type WindowPosition = 'windowCenter' | 'screenCenter'

export type CustomProps<LinkOptions> = {
  buttonTitle?: string
  /**
   * Disables click action and adds `disabled` class
   */
  disabled?: boolean
  /**
   * Style when button is disabled
   * @default { opacity: 0.6 }
   */
  disabledStyle?: React.CSSProperties
  forwardedRef?: Ref<HTMLButtonElement>
  networkName: string
  networkLink: NetworkLink<LinkOptions>
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, link: string) => void
  openShareDialogOnClick?: boolean
  opts: LinkOptions
  /**
   * URL of the shared page
   */
  url: string
  style?: React.CSSProperties
  windowWidth?: number
  windowHeight?: number
  windowPosition?: WindowPosition
  /**
   *  Takes a function that returns a Promise to be fulfilled before calling
   * `onClick`. If you do not return promise, `onClick` is called immediately.
   */
  beforeOnClick?: () => Promise<void> | void
  /**
   * Takes a function to be called after closing share dialog.
   */
  onShareWindowClose?: () => void
  resetButtonStyle?: boolean
  blankTarget?: boolean
  size?: number
  round?: boolean
  borderRadius?: number
  iconStyle?: CSSProperties
  iconFillColor?: string
  bgColor?: string
}

export type IconProps = {
  network: string
  color?: React.CSSProperties['color']
  background?: React.CSSProperties['backgroundColor']
  round?: boolean
  size?: number
  borderRadius?: React.CSSProperties['borderRadius']
}
