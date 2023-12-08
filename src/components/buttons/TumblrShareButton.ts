import createShareButton from '../../hocs/createShareButton'
import { TumblrLinkParams } from '../../types'
import { tumblrLink } from '../../utils/button'

const TumblrShareButton = createShareButton<
  TumblrLinkParams & { tags?: string[] },
  TumblrLinkParams & { tags: string }
>(
  'tumblr',
  tumblrLink,
  ({ title, tags, caption, posttype }) => ({
    title,
    caption,
    tags: (tags || []).join(','),
    posttype: posttype || 'link',
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default TumblrShareButton
