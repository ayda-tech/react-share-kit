import createShareButton from '../../hocs/createShareButton'
import { RedditLinkParams } from '../../types'
import { redditLink } from '../../utils/button'

const RedditShareButton = createShareButton<RedditLinkParams>(
  'reddit',
  redditLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
)

export default RedditShareButton
