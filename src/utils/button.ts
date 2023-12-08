import transformObjectToParams, { isMobileOrTablet } from '.'
import {
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
  PocketLinkParams,
  RedditLinkParams,
  TelegramLinkParams,
  TumblrLinkParams,
  TwitterLinkParams,
  VKShareLinkParams,
  ViberLinkParams,
  WeiboShareLinkParams,
  WhatsAppLinkParams,
  WorkplaceLinkParams,
} from '../types'

/**
 * Generates a Facebook sharing link.
 *
 * @param url - The URL to be shared.
 * @param quote - Optional. A quote or description to be included in the shared post.
 * @param hashtag - Optional. A hashtag to be included in the shared post.
 * @returns The Facebook sharing link.
 */
export function facebookLink(
  url: string,
  { quote, hashtag }: FacebookLinkParams,
) {
  return (
    'https://www.facebook.com/sharer/sharer.php' +
    transformObjectToParams({
      u: url,
      quote,
      hashtag,
    })
  )
}

/**
 * Generates a Email link for composing an email.
 *
 * @param url - The email address or addresses to send the email to.
 * @param subject - Optional. The subject line of the email.
 * @param body - Optional. The body content of the email.
 * @param separator - Optional. The separator to use between the body and the URL.
 * @returns The email link.
 */
export function emailLink(
  url: string,
  { subject, body, separator }: EmailLinkParams,
) {
  return (
    'mailto:' +
    transformObjectToParams({
      subject,
      body: body ? body + separator + url : url,
    })
  )
}

/**
 * Generates a Facebook Messenger link for sending a message.
 *
 * @param url - The URL to be shared within the message.
 * @param appId - Optional. The Facebook App ID or Your app's unique identifier..
 * @param redirectUri - Optional. The URL to redirect to after a person clicks a button on the dialog.
 * Required when using URL redirection.
 * @param to - Optional. A user ID of a recipient. Once the dialog comes up, the sender can
 * specify additional people as recipients.
 * @returns The Facebook Messenger link.
 */
export function facebookMessengerLink(
  url: string,
  { appId, redirectUri, to }: FacebookMessengerLinkParams,
) {
  return (
    'https://www.facebook.com/dialog/send' +
    transformObjectToParams({
      link: url,
      redirect_uri: redirectUri || url,
      app_id: appId,
      to,
    })
  )
}

/**
 * Generates a Gab Social link for composing a post.
 *
 * @param url - The URL to be shared within the post.
 * @param title - The title or text of the post.
 * @returns The Gab Social link for composing the post.
 */
export function gabLink(url: string, { title }: GapLinkParams) {
  return (
    'https://gab.com/compose' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

/**
 * Generates a Hatena bookmark link for adding a bookmark.
 *
 * @param url - The URL to be bookmarked.
 * @param title - The title of the bookmark.
 * @returns The Hatena bookmark link.
 */
export function hatenaLink(url: string, { title }: HatenaLinkParams) {
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`
}

/**
 * Generates an Instapaper link for saving a page.
 *
 * @param url - The URL of the page to be saved.
 * @param title - The title of the page.
 * @param description - Optional. The description of the page.
 * @returns The Instapaper link for saving the page.
 */
export function instapaperLink(
  url: string,
  { title, description }: InstaPaperLinkParams,
) {
  return (
    'http://www.instapaper.com/hello2' +
    transformObjectToParams({
      url,
      title,
      description,
    })
  )
}

/**
 * Generates a LINE Login link for sharing a URL.
 *
 * @param url - The URL to be shared.
 * @param title - The title or text of the shared content.
 * @returns The LINE Login link for sharing the URL.
 */
export function lineLink(url: string, { title }: LineLinkParams) {
  return (
    'https://social-plugins.line.me/lineit/share' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

/**
 * Generates a LinkedIn sharing link for sharing an article.
 *
 * @param url - The URL of the article to be shared.
 * @param title - The title of the article.
 * @param summary - Optional. The summary or description of the article.
 * @param source - Optional. The source or publication of the article.
 * @returns The LinkedIn sharing link for sharing the article.
 */
export function linkedinLink(
  url: string,
  { title, summary, source }: LinkedInLinkParams,
) {
  return (
    // 'https://linkedin.com/shareArticle' +
    'https://linkedin.com/sharing/share-offsite' +
    transformObjectToParams({ url, mini: 'true', title, summary, source })
  )
}

/**
 * Generates a LiveJournal update link for creating a new post.
 *
 * @param _url - This parameter is not used.
 * @param title - The title of the post.
 * @param description - The description or content of the post.
 * @returns The LiveJournal update link for creating a new post.
 */
export function liveJournalLink(
  _url: string,
  { title, description }: LiveJournalLinkParams,
) {
  return (
    'https://www.livejournal.com/update.bml' +
    transformObjectToParams({
      subject: title,
      event: description,
    })
  )
}

/**
 * Generates a Mail.Ru sharing link for sharing content.
 *
 * @param url - The URL of the content to be shared.
 * @param title - The title of the content.
 * @param description - The description or summary of the content.
 * @param imageUrl - Optional. The URL of an image associated with the content.
 * @returns The Mail.Ru sharing link for sharing the content.
 */
export function mailruLink(
  url: string,
  { title, description, imageUrl }: MailruLinkParams,
) {
  return (
    'https://connect.mail.ru/share' +
    transformObjectToParams({
      url,
      title,
      description,
      image_url: imageUrl,
    })
  )
}

/**
 * Generates a Pinterest sharing link.
 *
 * @param url - The URL to be pinned.
 * @param media - The media URL to be associated with the pin (optional).
 * @param description - The description of the pin (optional).
 * @returns The Pinterest sharing link.
 */
export function pinterestLink(
  url: string,
  { media, description }: PinterestLinkParams,
) {
  return (
    'https://pinterest.com/pin/create/button/' +
    transformObjectToParams({
      url,
      media,
      description,
    })
  )
}

/**
 * Generates a Pocket saving link.
 *
 * @param url - The URL to be saved.
 * @param title - The title of the saved item (optional).
 * @returns The Pocket saving link.
 */
export function pocketLink(url: string, { title }: PocketLinkParams) {
  return (
    'https://getpocket.com/save' +
    transformObjectToParams({
      url,
      title,
    })
  )
}

/**
 * Generates a Reddit submission link.
 *
 * @param url - The URL to be submitted.
 * @param title - The title of the submission (optional).
 * @returns The Reddit submission link.
 */
export function redditLink(url: string, { title }: RedditLinkParams) {
  return (
    'https://www.reddit.com/submit' +
    transformObjectToParams({
      url,
      title,
    })
  )
}

/**
 * Generates a Telegram sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @returns The Telegram sharing link.
 */
export function telegramLink(url: string, { title }: TelegramLinkParams) {
  return (
    'https://telegram.me/share/' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

/**
 * Generates a Tumblr sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param caption - The caption of the shared content (optional).
 * @param tags - An array of tags associated with the shared content (optional).
 * @param posttype - The type of post (optional).
 * @returns The Tumblr sharing link.
 */
export function tumblrLink(
  url: string,
  { title, caption, tags, posttype }: TumblrLinkParams,
) {
  return (
    'https://www.tumblr.com/widgets/share/tool' +
    transformObjectToParams({
      canonicalUrl: url,
      title,
      caption,
      tags,
      posttype,
    })
  )
}

/**
 * Generates a Twitter sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param via - The Twitter username to attribute the tweet to (optional).
 * @param hashtags - An array of hashtags to include in the tweet (optional).
 * @param related - An array of related accounts to suggest following after the tweet is sent (optional).
 * @returns The Twitter sharing link.
 */
export function twitterLink(
  url: string,
  { title, via, hashtags = [], related = [] }: TwitterLinkParams,
) {
  return (
    'https://twitter.com/intent/tweet' +
    transformObjectToParams({
      url,
      text: title,
      via,
      hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
      related: related.length > 0 ? related.join(',') : undefined,
    })
  )
}

/**
 * Generates a Viber sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param separator - The separator between the title and URL (optional).
 * @returns The Viber sharing link.
 */
export function viberLink(url: string, { title, separator }: ViberLinkParams) {
  return (
    'viber://forward' +
    transformObjectToParams({
      text: title ? title + separator + url : url,
    })
  )
}

/**
 * Generates a VKontakte (VK) sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param image - The URL of the image to be shared (optional).
 * @param noParse - Specifies whether to disable VK parsing of the shared content (optional).
 * @param noVkLinks - Specifies whether to disable VK-specific links in the shared content (optional).
 * @returns The VKontakte sharing link.
 */
export function vkLink(
  url: string,
  { title, image, noParse, noVkLinks }: VKShareLinkParams,
) {
  return (
    'https://vk.com/share.php' +
    transformObjectToParams({
      url,
      title,
      image,
      noparse: noParse ? 1 : 0,
      no_vk_links: noVkLinks ? 1 : 0,
    })
  )
}

/**
 * Generates a Weibo sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param image - The URL of the image to be shared (optional).
 * @returns The Weibo sharing link.
 */
export function weiboLink(url: string, { title, image }: WeiboShareLinkParams) {
  return (
    'http://service.weibo.com/share/share.php' +
    transformObjectToParams({
      url,
      title,
      pic: image,
    })
  )
}

/**
 * Generates a WhatsApp sharing link.
 *
 * @param url - The URL to be shared.
 * @param title - The title of the shared content (optional).
 * @param separator - The separator between the title and URL (optional).
 * @returns The WhatsApp sharing link.
 */
export function whatsappLink(
  url: string,
  { title, separator }: WhatsAppLinkParams,
) {
  return (
    'https://' +
    (isMobileOrTablet() ? 'api' : 'web') +
    '.whatsapp.com/send' +
    transformObjectToParams({
      text: title ? title + separator + url : url,
    })
  )
}

/**
 * Generates a Workplace sharing link.
 *
 * @param url - The URL to be shared.
 * @param quote - The quote or message to include in the shared content (optional).
 * @param hashtag - The hashtag to include in the shared content (optional).
 * @returns The Workplace sharing link.
 */
export function workplaceLink(
  url: string,
  { quote, hashtag }: WorkplaceLinkParams,
) {
  return (
    'https://work.facebook.com/sharer.php' +
    transformObjectToParams({
      u: url,
      quote,
      hashtag,
    })
  )
}
