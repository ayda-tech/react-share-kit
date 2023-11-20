import transformObjectToParams, { isMobileOrTablet } from '.'

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

export function gabLink(url: string, { title }: GapLinkParams) {
  return (
    'https://gab.com/compose' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

export function hatenaLink(url: string, { title }: HatenaLinkParams) {
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`
}

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

export function lineLink(url: string, { title }: LineLinkParams) {
  return (
    'https://social-plugins.line.me/lineit/share' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

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

export function liveJournalLink(
  _url: string,
  { title, description }: { title?: string; description?: string },
) {
  return (
    'https://www.livejournal.com/update.bml' +
    transformObjectToParams({
      subject: title,
      event: description,
    })
  )
}

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

export function pocketLink(url: string, { title }: PocketLinkParams) {
  return (
    'https://getpocket.com/save' +
    transformObjectToParams({
      url,
      title,
    })
  )
}

export function redditLink(url: string, { title }: RedditLinkParams) {
  return (
    'https://www.reddit.com/submit' +
    transformObjectToParams({
      url,
      title,
    })
  )
}

export function telegramLink(url: string, { title }: TelegramLinkParams) {
  return (
    'https://telegram.me/share/' +
    transformObjectToParams({
      url,
      text: title,
    })
  )
}

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

export function viberLink(url: string, { title, separator }: ViberLinkParams) {
  return (
    'viber://forward' +
    transformObjectToParams({
      text: title ? title + separator + url : url,
    })
  )
}

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
