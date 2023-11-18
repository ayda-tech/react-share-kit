# React-Share-Kit

React-Share-Kit is a simple and easy-to-use library for adding social media share buttons to your React applications. With React-Share-Kit, you can quickly integrate share buttons for popular social media platforms such as Facebook, Twitter, LinkedIn, and more.

## Installation

To install React-Share-Kit, simply run:

```
npm install react-share-kit
```

or

```
yarn add react-share-kit
```

## Usage

To use React-Share-Kit in your React application, import the necessary components and pass the relevant props to customize the share buttons. For example:

```jsx
import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share-kit';

const ShareButtons = () => {
  const shareUrl = 'https://example.com';
  const title = 'Check out this awesome website!';

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        Share on Twitter
      </TwitterShareButton>
    </div>
  );
};
```

## Documentation

For more information on how to use React-Share-Kit, including a full list of available share buttons and their props, please refer to the [official documentation](https://github.com/ayda-tech/react-share-kit).

## License

React-Share-Kit is licensed under the MIT License. See the [LICENSE](https://github.com/ayda-tech/react-share-kit/blob/main/LICENSE) file for more details.
