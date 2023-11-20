//=============LINK TYPES

// Email Link: TYPE
type EmailLinkParams = {
  body?: string
  separator?: string
  subject?: string
}
// Facebook Link: TYPE
type FacebookLinkParams = { quote?: string; hashtag?: string }
// Facebook Messenger Link: TYPE
type FacebookMessengerLinkParams = {
  appId: string
  redirectUri?: string
  to?: string
}
// Gab Link: TYPE
type GapLinkParams = { title?: string }
// Hatena Link: TYPE
type HatenaLinkParams = { title?: string }
// InstaPaper Link: TYPE
type InstaPaperLinkParams = { title?: string; description?: string }
// Line Link: TYPE
type LineLinkParams = { title?: string }
// Linkedin Link: TYPE
type LinkedInLinkParams = { title?: string; summary?: string; source?: string }
// LiveJournal Link: TYPE
type LiveJournalLinkParams = { title?: string; description?: string }
// Mailru Link: TYPE
type MailruLinkParams = {
  title?: string
  description?: string
  imageUrl?: string
}
// Pinterest Link: TYPE
type PinterestLinkParams = { media: string; description?: string }
// Pocket Link: TYPE
type PocketLinkParams = { title?: string }
// Reddit Link: TYPE
type RedditLinkParams = { title?: string }
// Telegram Link: TYPE
type TelegramLinkParams = { title?: string }
// Tumblr Link: TYPE
type TumblrLinkParams = {
  title?: string
  caption?: string
  tags?: string
  posttype?: 'link' | string
}
// Twitter Link: TYPE
type TwitterLinkParams = {
  title?: string
  via?: string
  hashtags?: string[]
  related?: string[]
}
// Viber Link: TYPE
type ViberLinkParams = { title?: string; separator?: string }
// VK Link: TYPE
type VKShareLinkParams = {
  title?: string
  image?: string
  noParse?: boolean
  noVkLinks?: boolean
}
// Weibo Link: TYPE
type WeiboShareLinkParams = { title?: string; image?: string }
// WhatsApp Link: TYPE
type WhatsAppLinkParams = { title?: string; separator?: string }
// Workplace Link: TYPE
type WorkplaceLinkParams = {
  quote?: string
  hashtag?: string
}

//======= HOC TYPES
type SVGConfig = {
  color: string
  name: string
  path: string
}

type SVGProps = Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  bgStyle?: React.CSSProperties
  borderRadius?: number
  iconFillColor?: string
  round?: boolean
  size?: number | string
}

type SocialMediaShareCountProps = React.HTMLAttributes<HTMLSpanElement> & {
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

type StateTypes = {
  count?: number
  isLoading: boolean
}
