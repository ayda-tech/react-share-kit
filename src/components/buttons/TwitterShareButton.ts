import createShareButton from '../../hocs/createShareButton'
import { TwitterLinkParams } from '../../types'
import { twitterLink } from '../../utils/button'

const TwitterShareButton = createShareButton<TwitterLinkParams>(
  'twitter',
  twitterLink,
  ({ title, via, related, hashtags }) => ({
    hashtags,
    title,
    via,
    related,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
)

export default TwitterShareButton
