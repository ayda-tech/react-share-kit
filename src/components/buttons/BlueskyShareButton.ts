import createShareButton from '../../hocs/createShareButton'
import { BlueskyLinkParams } from '../../types'
import { blueskyLink } from '../../utils/button'

const BlueskyShareButton = createShareButton<BlueskyLinkParams>(
  'bluesky',
  blueskyLink,
  ({ title, separator }) => ({
    title,
    separator: separator || ' ',
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default BlueskyShareButton
