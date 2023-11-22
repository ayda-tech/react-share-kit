# React-Share-Kit

React-Share-Kit is a simple and easy-to-use library for adding social media share buttons to your React & Next applications. With React-Share-Kit, you can quickly integrate share buttons for popular social media platforms such as Facebook, Twitter, LinkedIn, and more.

## Table of Contents
- [React-Share-Kit](#react-share-kit)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [💡 Usage of ShareButtons](#-usage-of-sharebuttons)
    - [Facebook](#facebook)
    - [Line](#line)
    - [Pinterest](#pinterest)
    - [Reddit](#reddit)
    - [Telegram](#telegram)
    - [Tumblr](#tumblr)
    - [Twitter](#twitter)
    - [Viber](#viber)
    - [Weibo](#weibo)
    - [Whatsapp](#whatsapp)
    - [Linkedin](#linkedin)
    - [VK](#vk)
    - [Mailru](#mailru)
    - [Livejournal](#livejournal)
    - [Workplace](#workplace)
    - [Pocket](#pocket)
    - [Instapaper](#instapaper)
    - [Hatena](#hatena)
    - [FacebookMessenger](#facebookmessenger)
    - [Email](#email)
    - [Gab](#gab)
  - [💡 Usage of ShareCount](#-usage-of-sharecount)
    - [Facebook](#facebook-1)
    - [Hatena](#hatena-1)
    - [OK](#ok)
    - [Pinterest](#pinterest-1)
    - [Tumblr](#tumblr-1)
    - [VK](#vk-1)
  - [**Documentation**](#documentation)
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

## 💡 Usage of ShareButtons

### Facebook

<h3> 👨‍💻 Code </h3>

```js
import {
  FacebookShareButton
} from 'react-share-kit'

<FacebookShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  quote={'react-share-kit is a social share buttons for your next React apps.'}
  hashtag={'#ReachShareKit'}
  round
/>

```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| quote | string |  | A quote to be shared. | ❌ |
| hashtag | string |  | Hashtag to be shared. | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>


### Line

<h3> 👨‍💻 Code </h3>

```js
import {
  LineShareButton
} from 'next-share-kit'

<LineShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Pinterest

<h3> 👨‍💻 Code </h3>

```js
import {
  PinterestShareButton
} from 'next-share-kit'

<PinterestShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  media={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| media | string |  | The image URL that will be pinned. | ✅ |
| description | string |  | The description of the shared media. | ❌ |
| windowWidth | number | 1000 | Opened window width. | ❌ |
| windowHeight | number | 730 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | 64px | The title of button used instead of icon. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>


###  Reddit

<h3> 👨‍💻 Code </h3>

```js
import {
  RedditShareButton
} from 'next-share-kit'

<RedditShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Telegram

<h3> 👨‍💻 Code </h3>

```js
import {
  TelegramShareButton
} from 'next-share-kit'

<TelegramShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Tumblr

<h3> 👨‍💻 Code </h3>

```js
import {
  TumblrShareButton
} from 'next-share-kit'

<TumblrShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| tags | <code>Array&lt;string&gt;</code> |  |  | ❌ |
| caption | string |  | The description of the shared page. | ❌ |
| posttype | string | <code>link</code> |  | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Twitter

<h3> 👨‍💻 Code </h3>

```js
import {
  TwitterShareButton
} from 'next-share-kit'

<TwitterShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| via | string |  |  | ❌ |
| hashtags | array |  |  | ❌ |
| related | array |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Viber

<h3> 👨‍💻 Code </h3>

```js
import {
  ViberShareButton
} from 'next-share-kit'

<ViberShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| separator |  |  |  | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Weibo

<h3> 👨‍💻 Code </h3>

```js
import {
  WeiboShareButton
} from 'next-share-kit'

<WeiboShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
  image={`${String(window.location)}/${example-image}`}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| image | string |  | The image URL that will be shared. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 550 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Whatsapp

<h3> 👨‍💻 Code </h3>

```js
import {
  WhatsappShareButton
} from 'next-share-kit'

<WhatsappShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'next-share-kit is a social share buttons for your next React apps.'}
  separator=":: "
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| separator | string |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Linkedin

<h3> 👨‍💻 Code </h3>

```js
import {
  LinkedinShareButton
} from 'next-share-kit'

<LinkedinShareButton url={'https://github.com/ayda-tech/react-share-kit'} />
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| windowWidth | number | 750 | Opened window width. | ❌ |
| windowHeight | number | 600 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  VK

<h3> 👨‍💻 Code </h3>

```js
import {
  VKShareButton
} from 'next-share-kit'

<VKShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  image={'./next-share.png'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| image | string |  | An absolute link to the image that will be shared. | ❌ |
| noParse | boolean |  | If true is passed, VK will not retrieve URL information. | ❌ |
| noVkLinks | boolean |  | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Mailru

<h3> 👨‍💻 Code </h3>

```js
import {
  MailruShareButton
} from 'next-share-kit'

<MailruShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| imageUrl | string |  | Image url of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Livejournal

<h3> 👨‍💻 Code </h3>

```js
import {
  LivejournalShareButton
} from 'next-share-kit'

<LivejournalShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
  description={'https://github.com/ayda-tech/react-share-kit'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Workplace

<h3> 👨‍💻 Code </h3>

```js
import {
  WorkplaceShareButton
} from 'next-share-kit'

<WorkplaceShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  quote={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| quote | string |  |  | ❌ |
| hashtag | string |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ ||

</details>

###  Pocket

<h3> 👨‍💻 Code </h3>

```js
import {
  PocketShareButton
} from 'next-share-kit'

<PocketShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. Note that if Pocket detects a title tag on the page being saved, this parameter will be ignored and the title tag of the saved page will be used instead. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Instapaper

<h3> 👨‍💻 Code </h3>

```js
import {
  InstapaperShareButton
} from 'next-share-kit'

<InstapaperShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Hatena

<h3> 👨‍💻 Code </h3>

```js
import {
  HatenaShareButton
} from 'next-share-kit'

<HatenaShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  FacebookMessenger

<h3> 👨‍💻 Code </h3>

```js
import {
  FacebookMessengerShareButton
} from 'next-share-kit'

<FacebookMessengerShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  appId={''}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| appId | string |  | Facebook application id. | ✅ |
| redirectUri | string |  | The URL to redirect to after sharing (default: the shared url). | ❌ |
| to | string |  | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. | ❌ |
| windowWidth | number | 1000 | Opened window width. | ❌ |
| windowHeight | number | 820 | Opened window height. | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Email

<h3> 👨‍💻 Code </h3>

```js
import {
  EmailShareButton
} from 'next-share-kit'

<EmailShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  subject={'Next Share'}
  body="body"
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| subject | string |  |  | ❌ |
| body | string |  |  | ❌ |
| separator | string |  |  | ❌ |
| blankTarget | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

###  Gab

<h3> 👨‍💻 Code </h3>

```js
import {
  GabShareButton,
} from 'next-share-kit'

<GabShareButton
  url={'https://github.com/ayda-tech/react-share-kit'}
  title={'Next Share'}
/>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 640 | Opened window height. | ❌ |
| bgColor | string | related color | It used for button background color. | ❌ |
| round | boolean | false | Open share window in a new tab if set to `true`. | ❌ |
| size  | number | 64px | The button size. | ❌ |
| buttonTitle  | string | | The title of button used instead of icon. | ❌ |

</details>

## 💡 Usage of ShareCount

###  Facebook

<h3> 👨‍💻 Code </h3>

```js
import { FacebookShareCount } from 'next-share-kit'

<FacebookShareCount
  url='https://github.com/ayda-tech/react-share-kit'
  appId=''
  appSecret=''
/>

<FacebookShareCount
  url='https://github.com/ayda-tech/react-share-kit'
  appId=''
  appSecret=''
>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</FacebookShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| appId | string |  | Facebook application id. | ✅ |
| appSecret | string |  | Facebook application secret. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

###  Hatena

<h3> 👨‍💻 Code </h3>

```js
import { HatenaShareCount } from 'next-share-kit'

<HatenaShareCount url={'https://github.com/ayda-tech/react-share-kit'} />

<HatenaShareCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</HatenaShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

###  OK

<h3> 👨‍💻 Code </h3>

```js
import { OKShareCount } from 'next-share-kit'

<OKShareCount url={'https://github.com/ayda-tech/react-share-kit'} />

<OKShareCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</OKShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

###  Pinterest

<h3> 👨‍💻 Code </h3>

```js
import { PinterestShareCount } from 'next-share-kit'

<PinterestShareCount url={'https://github.com/ayda-tech/react-share-kit'} />

<PinterestShareCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</PinterestShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

###  Tumblr

<h3> 👨‍💻 Code </h3>

```js
import { TumblrShareCount } from 'next-share-kit'

<TumblrShareCount url={'https://github.com/ayda-tech/react-share-kit'} />

<TumblrShareCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</TumblrShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

###  VK

<h3> 👨‍💻 Code </h3>

```js
import { VKShareCount } from 'next-share-kit'

<VKShareCount url={'https://github.com/ayda-tech/react-share-kit'} />

<VKShareCount url={'https://github.com/ayda-tech/react-share-kit'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</VKShareCount>
```

<details>
<summary>📖 Props</summary>

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| url | string |  | The URL of the shared page. | ✅ |
| children | node |  | React component, HTML element or string. | ❌ |

</details>

To use React-Share-Kit in your React application, import the necessary components and pass the relevant props to customize the share buttons. For example:

```jsx
import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share-kit';

const ShareButtons = () => {
  const shareUrl = 'https://example.com';
  const title = 'Check out this awesome website!';

  return (
      <FacebookShareButton url={shareUrl} quote={title} />
  );
};
```

## **Documentation**

For more information on how to use React-Share-Kit, including a full list of available share buttons and their props, please refer to the [official documentation](https://github.com/ayda-tech/react-share-kit).

## License

React-Share-Kit is licensed under the MIT License. See the [LICENSE](https://github.com/ayda-tech/react-share-kit/blob/main/LICENSE) file for more details.
