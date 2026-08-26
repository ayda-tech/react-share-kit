
# React-Share-Kit 
React-Share-Kit is a simple and easy-to-use library for adding social media share buttons to your React & Next applications. With React-Share-Kit, you can quickly integrate share buttons for popular social media platforms such as Facebook, X (formerly Twitter), LinkedIn, and more.

If package size matters and you don't need share counts, [react-share-lite](https://www.npmjs.com/package/react-share-lite) is the lightweight alternative.
****
[![downloads](https://img.shields.io/npm/dm/react-share-kit.svg?label=monthly%20downloads)](https://www.npmjs.com/package/react-share-kit) [![downloads](https://img.shields.io/npm/dt/react-share-kit.svg?label=total%20downloads)](https://www.npmjs.com/package/react-share-kit)

[![NPM](https://img.shields.io/npm/v/react-share-kit.svg)](https://www.npmjs.com/package/react-share-kit) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-share-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Share buttons screenshot](https://github.com/ayda-tech/react-share-lite/blob/main/react-share-lite.png?raw=true)

### 🚀 What's new in v2.0.0

- **React 19 ready** — works with React 17, 18 and 19, and with the Next.js App Router (the bundle ships a `'use client'` banner).
- **New networks** — `XShare` (the canonical X button), `BlueskyShare` and `ThreadsShare`.
- **Styleable at last** — `className`, `style` and every other standard button HTML attribute are forwarded to the underlying `<button>`.
- **Dead networks removed** — `PocketShare` and `WorkplaceShare` are gone (both services were shut down), along with the broken `FacebookCount` and `RedditCount`.

See [CHANGELOG.md](./CHANGELOG.md) for the full list, including breaking changes.

**Requirements:** React 17, 18 or 19.

---

### Table of Contents
- [React-Share-Kit](#react-share-kit)
    - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [📕 Share Button Global Props](#-share-button-global-props)
  - [💡 Usage of ShareButtons](#-usage-of-sharebuttons)
    - [Facebook Share](#facebook-share)
    - [X Share](#x-share)
    - [Twitter Share (deprecated)](#twitter-share-deprecated)
    - [Bluesky Share](#bluesky-share)
    - [Threads Share](#threads-share)
    - [Linkedin Share](#linkedin-share)
    - [Whatsapp Share](#whatsapp-share)
    - [Telegram Share](#telegram-share)
    - [FacebookMessenger Share](#facebookmessenger-share)
    - [Email Share](#email-share)
    - [VK Share](#vk-share)
    - [Pinterest Share](#pinterest-share)
    - [Reddit Share](#reddit-share)
    - [Line Share](#line-share)
    - [Tumblr Share](#tumblr-share)
    - [Viber Share](#viber-share)
    - [Weibo Share](#weibo-share)
    - [Mailru Share](#mailru-share)
    - [LiveJournal Share](#livejournal-share)
    - [Instapaper Share](#instapaper-share)
    - [Hatena Share](#hatena-share)
    - [Gab Share](#gab-share)
  - [📕 Share Count global props](#-share-count-global-props)
  - [💡 Usage of ShareCount](#-usage-of-sharecount)
    - [Hatena Count](#hatena-count)
    - [OK Count](#ok-count)
    - [Pinterest Count](#pinterest-count)
    - [Tumblr Count](#tumblr-count)
    - [VK Count](#vk-count)
  - [❓ FAQ](#-faq)
  - [License](#license)

## Installation

To install React-Share-Kit, simply run:

```bash
npm install react-share-kit
```

or

```bash
yarn add react-share-kit
```

## 📕 Share Button Global Props

Each button supports a set of global props that are consistent across all buttons. However, in addition to these global props, each button also possesses its own unique set of specific properties. These specific properties are tailored to the individual functionality and customization options of each button.

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| title | string |  | The title of the shared page. | FALSE |
| windowWidth | number | 550 | Opened window width. | FALSE |
| windowHeight | number | 400 | Opened window height. | FALSE |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | FALSE |
| bgColor | string | related color | Icon background color. | FALSE |
| round | boolean | false | The "round" attribute creates a fully circular button shape, giving it a 100% rounded appearance. | FALSE |
| borderRadius  | number | 0px | Custom round share. | FALSE |
| size  | number | 64px | The button size. | FALSE |
| buttonTitle  | string | | The title of button used instead of icon. | FALSE |
| disabled | boolean | false | Disables the button click and applies `disabledStyle`. | FALSE |
| disabledStyle | CSSProperties | `{ opacity: 0.6 }` | Style applied to the button while it is disabled. | FALSE |
| style | CSSProperties |  | Custom style of the underlying `<button>` element. | FALSE |
| iconStyle | CSSProperties |  | Custom style of the icon SVG. | FALSE |
| iconFillColor | string |  | Fill color of the icon path. | FALSE |
| windowPosition | `windowCenter` \| `screenCenter` | windowCenter | Position of the share popup window. | FALSE |
| openShareDialogOnClick | boolean | true | Open the share dialog on click. | FALSE |
| onClick | function |  | `(event, link) => void` called on click, after the share dialog is handled. | FALSE |
| beforeOnClick | function |  | Takes a function that returns a Promise to be fulfilled before opening the share dialog. | FALSE |
| onShareWindowClose | function |  | Takes a function to be called after closing the share dialog. | FALSE |
| resetButtonStyle | boolean | true | Reset the browser's default button styles. | FALSE |

🎨 <b>Styling</b>: all standard button HTML attributes (`className`, `style`, `aria-*`, `data-*`, event handlers, ...) are forwarded to the underlying `<button>` element, so you can style the buttons with your own CSS classes.

👨‍💻 <b>Example</b> 

```jsx
import React from 'react';
import { FacebookShare, XShare, PinterestCount } from 'react-share-kit';

const ShareButtons = () => {
  const shareUrl = 'https://github.com/ayda-tech/react-share-kit';
  const title = 'Check out this awesome website!';

  return (
      <>
        <FacebookShare url={shareUrl} quote={title} />

        <XShare url={shareUrl} title={title} className="my-share-button" />

        <PinterestCount url={shareUrl} />

        <PinterestCount url={shareUrl}>
          {shareCount => <span className="wrapper">{shareCount}</span>}
        </PinterestCount>
      </>
  );
};
```

## 💡 Usage of ShareButtons

### Facebook Share

👨‍💻 <b>Example</b> 

```js
import { FacebookShare } from 'react-share-kit'

<FacebookShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  quote={'react-share-kit - social share buttons for next & react apps.'}
  hashtag={'#react-share-kit'}
/>

```

📕 <b>Props</b>: Supports only on Facebook

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| quote | string |  | A quote to be shared. | FALSE |
| hashtag | string |  | Hashtag to be shared. | FALSE |

###  X Share

👨‍💻 <b>Example</b> 

```js
import { XShare } from 'react-share-kit'

<XShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  hashtags={['react-share-kit', 'front-end']}
/>
```
📕 <b>Props</b>: Supports only on X

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| via | string |  | X username to attribute the post to (without `@`). | FALSE |
| hashtags | <code>Array&lt;string&gt;</code> |  | Hashtags to include in the post (without `#`). | FALSE |
| related | <code>Array&lt;string&gt;</code> |  | Accounts to suggest following after the post is sent. | FALSE |

###  Twitter Share (deprecated)

> ⚠️ <b>Deprecated</b>: Twitter is now X. `TwitterShare` is kept as an alias of [`XShare`](#x-share) — it renders the X logo and opens `x.com/intent/post` — but you should use `XShare` in new code.

👨‍💻 <b>Example</b> 

```js
import { TwitterShare } from 'react-share-kit'

<TwitterShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  hashtags={['react-share-kit', 'front-end']}
/>
```

📕 <b>Props</b>: Same as [X Share](#x-share).

###  Bluesky Share

👨‍💻 <b>Example</b> 

```js
import { BlueskyShare } from 'react-share-kit'

<BlueskyShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  separator=":: "
/>
```

📕 <b>Props</b>: Supports only on Bluesky

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| separator | string |  | Separator between the title and the URL. | FALSE |

###  Threads Share

👨‍💻 <b>Example</b> 

```js
import { ThreadsShare } from 'react-share-kit'

<ThreadsShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
/>
```

###  Linkedin Share

👨‍💻 <b>Example</b> 

```js
import { LinkedinShare } from 'react-share-kit'

<LinkedinShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Whatsapp Share

👨‍💻 <b>Example</b> 

```js
import { WhatsappShare } from 'react-share-kit'

<WhatsappShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  separator=":: "
/>
```

📕 <b>Props</b>: Supports only on WhatsApp

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| separator | string |  |  | FALSE |


###  Telegram Share

👨‍💻 <b>Example</b> 

```js
import { TelegramShare } from 'react-share-kit'

<TelegramShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  FacebookMessenger Share

👨‍💻 <b>Example</b> 

```js
import { FacebookMessengerShare } from 'react-share-kit'

<FacebookMessengerShare
  url='https://github.com/ayda-tech/react-share-kit'
  redirectUri="https://github.com/ayda-tech/react-share-kit"
  appId={'dmm4kj9djk203k4liuf994p'}
/>
```

📕 <b>Props</b>: Supports only on Facebook Messenger

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| appId | string |  | Facebook application id. | TRUE |
| redirectUri | string |  | The URL to redirect to after sharing (default: the shared url). | FALSE |
| to | string |  | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. | FALSE |

### Email Share

👨‍💻 <b>Example</b>

```js
import { EmailShare } from 'react-share-kit'

<EmailShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  subject={'React Share Kit'}
  body="body"
/>
```

📕 <b>Props</b>: Supports only on Email

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| subject | string |  | The subject line of the email. | FALSE |
| body | string |  | The body content of the email; the URL is appended to it. | FALSE |
| separator | string |  | Separator between the body and the URL. | FALSE |

###  VK Share

👨‍💻 <b>Example</b> 

```js
import { VKShare } from 'react-share-kit'

<VKShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  image={'./react-share.png'}
/>
```

📕 <b>Props</b>: Supports only on VK

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| image | string |  | An absolute link to the image that will be shared. | FALSE |
| noParse | boolean |  | If true is passed, VK will not retrieve URL information. | FALSE |
| noVkLinks | boolean |  | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices. | FALSE |

###  Pinterest Share

👨‍💻 <b>Example</b> 

```js
import { PinterestShare } from 'react-share-kit'

<PinterestShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  media={'react-share-kit - social share buttons for next & react apps.'}
/>
```
📕 <b>Props</b>: Supports only on Pinterest

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| media | string |  | The image URL that will be pinned. | TRUE |
| description | string |  | The description of the shared media. | FALSE |

###  Reddit Share

👨‍💻 <b>Example</b> 

```js
import { RedditShare } from 'react-share-kit'

<RedditShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Line Share

👨‍💻 <b>Example</b> 

```js
import { LineShare } from 'react-share-kit'

<LineShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Tumblr Share

👨‍💻 <b>Example</b> 

```js
import { TumblrShare } from 'react-share-kit'

<TumblrShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  caption="react-share-kit - social share buttons for next & react apps."
/>
```

📕 <b>Props</b>: Supports only on Tumblr

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| tags | <code>Array&lt;string&gt;</code> |  |  | FALSE |
| caption | string |  | The description of the shared page. | FALSE |
| posttype | string | <code>link</code> |  | FALSE |

###  Viber Share

👨‍💻 <b>Example</b> 

```js
import { ViberShare } from 'react-share-kit'

<ViberShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
/>
```

📕 <b>Props</b>: Supports only on Viber

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| separator | string |  |  | FALSE |

###  Weibo Share

👨‍💻 <b>Example</b> 

```js
import { WeiboShare } from 'react-share-kit'

<WeiboShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  image={`${String(window.location)}/example-image.png`}
/>
```

📕 <b>Props</b>: Supports only on Weibo

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| image | string |  | The image URL that will be shared. | FALSE |

###  Mailru Share

👨‍💻 <b>Example</b> 

```js
import { MailruShare } from 'react-share-kit'

<MailruShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>: Supports only on Mail-Ru

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |
| imageUrl | string |  | Image url of the shared page. | FALSE |

###  LiveJournal Share

👨‍💻 <b>Example</b> 

```js
import { LiveJournalShare } from 'react-share-kit'

<LiveJournalShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>: Supports only on Live Journal

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |

###  Instapaper Share

👨‍💻 <b>Example</b> 

```js
import { InstapaperShare } from 'react-share-kit'

<InstapaperShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>: Supports only on Instapaper

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |

###  Hatena Share

👨‍💻 <b>Example</b> 

```js
import { HatenaShare } from 'react-share-kit'

<HatenaShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Gab Share

👨‍💻 <b>Example</b> 

```js
import { GabShare } from 'react-share-kit'

<GabShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

## 📕 Share Count global props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

## 💡 Usage of ShareCount

> ⚠️ The count components use the networks' legacy public count endpoints, which work today but are unofficial and can disappear without notice.

###  Hatena Count

👨‍💻 <b>Example</b> 

```js
import { HatenaCount } from 'react-share-kit'

<HatenaCount url={'https://github.com/ayda-tech/react-share-kit'} />

<HatenaCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</HatenaCount>
```

###  OK Count

👨‍💻 <b>Example</b> 

```js
import { OKCount } from 'react-share-kit'

<OKCount url={'https://github.com/ayda-tech/react-share-kit'} />

<OKCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</OKCount>
```

###  Pinterest Count

👨‍💻 <b>Example</b> 

```js
import { PinterestCount } from 'react-share-kit'

<PinterestCount url={'https://github.com/ayda-tech/react-share-kit'} />

<PinterestCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</PinterestCount>
```

###  Tumblr Count

👨‍💻 <b>Example</b> 

```js
import { TumblrCount } from 'react-share-kit'

<TumblrCount url={'https://github.com/ayda-tech/react-share-kit'} />

<TumblrCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</TumblrCount>
```

###  VK Count

👨‍💻 <b>Example</b> 

```js
import { VKCount } from 'react-share-kit'

<VKCount url={'https://github.com/ayda-tech/react-share-kit'} />

<VKCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</VKCount>
```

## ❓ FAQ

<b>Why doesn't my shared link show an image preview?</b>

Link previews are generated from the Open Graph / Twitter Card meta tags of the <b>shared page</b>, not by this library. The share buttons only pass the URL to the network; the network then crawls that URL for its preview. Add `og:image`, `og:title`, `og:description` (and, for X, the `twitter:card` tags) to the `<head>` of the page you are sharing.

## License

React-Share-Kit is licensed under the MIT License. See the [LICENSE](https://github.com/ayda-tech/react-share-kit/blob/main/LICENSE) file for more details.
