
<center>

### React-Share-Kit 
React-Share-Kit is a simple and easy-to-use library for adding social media share buttons to your React & Next applications. With React-Share-Kit, you can quickly integrate share buttons for popular social media platforms such as Facebook, Twitter, LinkedIn, and more.

[![downloads](https://img.shields.io/npm/dm/react-share-kit.svg?label=monthly%20downloads)](https://www.npmjs.com/package/react-share-kit) [![downloads](https://img.shields.io/npm/dt/react-share-kit.svg?label=total%20downloads)](https://www.npmjs.com/package/react-share-kit)

[![NPM](https://img.shields.io/npm/v/react-share-kit.svg)](https://www.npmjs.com/package/react-share-kit) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-share-kit) [![Build Status](https://api.travis-ci.com/Bunlong/react-share-kit.svg?branch=master)](https://travis-ci.com/Bunlong/react-share-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</center>

---

### Table of Contents
- [Installation](#installation)
- [🔥 Share Buttons Detault Props](#-share-buttons-detault-props)
- [💡 Usage of ShareButtons](#-usage-of-sharebuttons)
  - [Facebook](#facebook)
  - [Twitter](#twitter)
  - [Linkedin](#linkedin)
  - [Whatsapp](#whatsapp)
  - [Telegram](#telegram)
  - [FacebookMessenger](#facebookmessenger)
  - [Email](#email)
  - [VK](#vk)
  - [Pinterest](#pinterest)
  - [Reddit](#reddit)
  - [Line](#line)
  - [Tumblr](#tumblr)
  - [Viber](#viber)
  - [Weibo](#weibo)
  - [Mailru](#mailru)
  - [LiveJournal](#livejournal)
  - [Workplace](#workplace)
  - [Pocket](#pocket)
  - [Instapaper](#instapaper)
  - [Hatena](#hatena)
  - [Gab](#gab)
- [💡 Usage of ShareCount](#-usage-of-sharecount)
  - [Facebook](#facebook-1)
  - [Hatena](#hatena-1)
  - [OK](#ok)
  - [Pinterest](#pinterest-1)
  - [Tumblr](#tumblr-1)
  - [VK](#vk-1)
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

## 🔥 Share Buttons Detault Props

To use React-Share-Kit in your React application, import the necessary components and pass the relevant props to customize the share buttons. and every share button support this properties as attributes. For example:

👨‍💻 <b>Example</b> 

```jsx
import React from 'react';
import { FacebookShare, TwitterShare } from 'react-share-kit';

const ShareButtons = () => {
  const shareUrl = 'https://example.com';
  const title = 'Check out this awesome website!';

  return (
      <FacebookShare url={shareUrl} quote={title} />
      <TwitterShare url={shareUrl} round title="X" />
  );
};
```
📕 <b>Default Props</b>

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


## 💡 Usage of ShareButtons

### Facebook

👨‍💻 <b>Example</b> 

```js
import {
  FacebookShare
} from 'react-share-kit'

<FacebookShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  quote={'react-share-kit - social share buttons for next & react apps.'}
  hashtag={'#react-share-kit'}
/>

```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| quote | string |  | A quote to be shared. | FALSE |
| hashtag | string |  | Hashtag to be shared. | FALSE |

###  Twitter

👨‍💻 <b>Example</b> 

```js
import {
  TwitterShare
} from 'react-share-kit'

<TwitterShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  hashtags=["#react-share-kit", "#front-end"]
/>
```
📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| via | string |  |  | FALSE |
| hashtags | array |  |  | FALSE |
| related | array |  |  | FALSE |

###  Linkedin

👨‍💻 <b>Example</b> 

```js
import {
  LinkedinShare
} from 'react-share-kit'

<LinkedinShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Whatsapp

👨‍💻 <b>Example</b> 

```js
import {
  WhatsappShare
} from 'react-share-kit'

<WhatsappShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  separator=":: "
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| separator | string |  |  | FALSE |


###  Telegram

👨‍💻 <b>Example</b> 

```js
import {
  TelegramShare
} from 'react-share-kit'

<TelegramShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  FacebookMessenger

👨‍💻 <b>Example</b> 

```js
import {
  FacebookMessengerShareButton
} from 'react-share-kit'

<FacebookMessengerShareButton
  url='https://github.com/ayda-tech/react-share-kit'
  redirectUri="https://github.com/ayda-tech/react-share-kit"
  appId={'dmm4kj9djk203k4liuf994p'}
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| appId | string |  | Facebook application id. | TRUE |
| redirectUri | string |  | The URL to redirect to after sharing (default: the shared url). | FALSE |
| to | string |  | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. | FALSE |

### Email

👨‍💻 <b>Example</b>

```js
import { EmailShare } from 'next-share'

<EmailShare
  url={'https://github.com/next-share'}
  subject={'Next Share'}
  body="body"
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | TRUE |
| url | string |  | The URL of the shared page. | TRUE |
| subject | string |  |  | FALSE |
| body | string |  |  | FALSE |
| separator | string |  |  | FALSE |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | FALSE |

###  VK

👨‍💻 <b>Example</b> 

```js
import {
  VKShare
} from 'react-share-kit'

<VKShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  image={'./react-share.png'}
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| image | string |  | An absolute link to the image that will be shared. | FALSE |
| noParse | boolean |  | If true is passed, VK will not retrieve URL information. | FALSE |
| noVkLinks | boolean |  | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices. | FALSE |

###  Pinterest

👨‍💻 <b>Example</b> 

```js
import {
  PinterestShare
} from 'react-share-kit'

<PinterestShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  media={'react-share-kit - social share buttons for next & react apps.'}
/>
```
📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| media | string |  | The image URL that will be pinned. | TRUE |
| description | string |  | The description of the shared media. | FALSE |

###  Reddit

👨‍💻 <b>Example</b> 

```js
import {
  RedditShare
} from 'react-share-kit'

<RedditShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Line

👨‍💻 <b>Example</b> 

```js
import {
  LineShare
} from 'react-share-kit'

<LineShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

###  Tumblr

👨‍💻 <b>Example</b> 

```js
import {
  TumblrShare
} from 'react-share-kit'

<TumblrShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  caption="react-share-kit - social share buttons for next & react apps."
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| tags | <code>Array&lt;string&gt;</code> |  |  | FALSE |
| caption | string |  | The description of the shared page. | FALSE |
| posttype | string | <code>link</code> |  | FALSE |

###  Viber

👨‍💻 <b>Example</b> 

```js
import {
  ViberShare
} from 'react-share-kit'

<ViberShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| separator | string |  |  | FALSE |

###  Weibo

👨‍💻 <b>Example</b> 

```js
import {
  WeiboShare
} from 'react-share-kit'

<WeiboShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'react-share-kit - social share buttons for next & react apps.'}
  image={`${String(window.location)}/${example-image}`}
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| image | string |  | The image URL that will be shared. | FALSE |

###  Mailru

👨‍💻 <b>Example</b> 

```js
import {
  MailruShare
} from 'react-share-kit'

<MailruShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |
| imageUrl | string |  | Image url of the shared page. | FALSE |

###  LiveJournal

👨‍💻 <b>Example</b> 

```js
import {
  LiveJournalShare
} from 'react-share-kit'

<LiveJournalShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |

###  Workplace

👨‍💻 <b>Example</b> 

```js
import {
  WorkplaceShare
} from 'react-share-kit'

<WorkplaceShare
  url={'https://github.com/ayda-tech/react-share-kit'}
  quote={'React Share Kit'}
/>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| quote | string |  |  | FALSE |
| hashtag | string |  |  | FALSE |

###  Pocket

👨‍💻 <b>Example</b> 

```js
import {
  PocketShare
} from 'react-share-kit'

<PocketShare url={'https://github.com/ayda-tech/react-share-kit' />
```

###  Instapaper

👨‍💻 <b>Example</b> 

```js
import {
  InstapaperShare
} from 'react-share-kit'

<InstapaperShare url={'https://github.com/ayda-tech/react-share-kit'} />
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| description | string |  | Description of the shared page. | FALSE |

###  Hatena

👨‍💻 <b>Example</b> 

```js
import {
  HatenaShareButton
} from 'react-share-kit'

<HatenaShare url={'https://github.com/ayda-tech/react-share-kit' />
```

###  Gab

👨‍💻 <b>Example</b> 

```js
import {
  GabShare
} from 'react-share-kit'

<GabShare url={'https://github.com/ayda-tech/react-share-kit'} />

```

## 💡 Usage of ShareCount

###  Facebook

👨‍💻 <b>Example</b> 

```js
import { FacebookCount } from 'react-share-kit'

<FacebookCount
  url='https://github.com/ayda-tech/react-share-kit'
  appId=''
  appSecret=''
/>

<FacebookCount
  url='https://github.com/ayda-tech/react-share-kit'
  appId=''
  appSecret=''
>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</FacebookCount>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| appId | string |  | Facebook application id. | TRUE |
| appSecret | string |  | Facebook application secret. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

###  Hatena

👨‍💻 <b>Example</b> 

```js
import { HatenaCount } from 'react-share-kit'

<HatenaCount url={'https://github.com/ayda-tech/react-share-kit'} />

<HatenaCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</HatenaCount>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

###  OK

👨‍💻 <b>Example</b> 

```js
import { OKCount } from 'react-share-kit'

<OKCount url={'https://github.com/ayda-tech/react-share-kit'} />

<OKCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</OKCount>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

###  Pinterest

👨‍💻 <b>Example</b> 

```js
import { PinterestShareCount } from 'react-share-kit'

<PinterestCount url={'https://github.com/ayda-tech/react-share-kit'} />

<PinterestCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</PinterestCount>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

###  Tumblr

👨‍💻 <b>Example</b> 

```js
import { TumblrCount } from 'react-share-kit'

<TumblrCount url={'https://github.com/ayda-tech/react-share-kit'} />

<TumblrCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</TumblrCount>
```

📕 <b>Props</b

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

###  VK

👨‍💻 <b>Example</b> 

```js
import { VKCount } from 'react-share-kit'

<VKSCount url={'https://github.com/ayda-tech/react-share-kit'} />

<VKCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</VKCount>
```

📕 <b>Props</b>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | TRUE |
| children | node |  | React component, HTML element or string. | FALSE |

---

## License

React-Share-Kit is licensed under the MIT License. See the [LICENSE](https://github.com/ayda-tech/react-share-kit/blob/main/LICENSE) file for more details.
