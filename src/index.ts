// Buttons
export { default as BlueskyShare } from './components/buttons/BlueskyShareButton'
export { default as EmailShare } from './components/buttons/EmailShareButton'
export { default as FacebookShare } from './components/buttons/FacebookShareButton'
export { default as FacebookMessengerShare } from './components/buttons/FacebookMessengerShareButton'
export { default as GabShare } from './components/buttons/GabShareButton'
export { default as HatenaShare } from './components/buttons/HatenaShareButton'
export { default as InstapaperShare } from './components/buttons/InstapaperShareButton'
export { default as LineShare } from './components/buttons/LineShareButton'
export { default as LinkedinShare } from './components/buttons/LinkedinShareButton'
export { default as LiveJournalShare } from './components/buttons/LivejournalShareButton'
export { default as MailruShare } from './components/buttons/MailruShareButton'
export { default as PinterestShare } from './components/buttons/PinterestShareButton'
export { default as RedditShare } from './components/buttons/RedditShareButton'
export { default as TelegramShare } from './components/buttons/TelegramShareButton'
export { default as ThreadsShare } from './components/buttons/ThreadsShareButton'
export { default as TumblrShare } from './components/buttons/TumblrShareButton'
export { default as ViberShare } from './components/buttons/ViberShareButton'
export { default as VKShare } from './components/buttons/VKShareButton'
export { default as WeiboShare } from './components/buttons/WeiboShareButton'
export { default as WhatsappShare } from './components/buttons/WhatsappShareButton'
export { default as XShare } from './components/buttons/XShareButton'

/**
 * @deprecated Use `XShare` instead. Twitter is now X; this alias renders the
 * X icon and opens the X post intent.
 */
export { default as TwitterShare } from './components/buttons/TwitterShareButton'

/**
 * @deprecated Misspelled legacy alias kept for backwards compatibility.
 * Use `VKShare` instead.
 */
export { default as VKShareShare } from './components/buttons/VKShareButton'

// Counts
export { default as HatenaCount } from './components/counts/HatenaShareCount'
export { default as OKCount } from './components/counts/OKShareCount'
export { default as PinterestCount } from './components/counts/PinterestShareCount'
export { default as TumblrCount } from './components/counts/TumblrShareCount'
export { default as VKCount } from './components/counts/VKShareCount'

// Types
export type {
  BlueskyLinkParams,
  EmailLinkParams,
  FacebookLinkParams,
  FacebookMessengerLinkParams,
  GapLinkParams,
  HatenaLinkParams,
  InstaPaperLinkParams,
  LineLinkParams,
  LinkedInLinkParams,
  LiveJournalLinkParams,
  MailruLinkParams,
  PinterestLinkParams,
  RedditLinkParams,
  TelegramLinkParams,
  ThreadsLinkParams,
  TumblrLinkParams,
  TwitterLinkParams,
  ViberLinkParams,
  VKShareLinkParams,
  WeiboShareLinkParams,
  WhatsAppLinkParams,
  XLinkParams,
  CustomProps,
  IconProps,
  NetworkLink,
  SocialMediaShareCountProps,
  WindowPosition,
} from './types'
