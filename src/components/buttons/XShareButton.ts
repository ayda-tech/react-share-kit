import createShareButton from '../../hocs/createShareButton'
import { XLinkParams } from '../../types'
import { xLink } from '../../utils/button'

const XShareButton = createShareButton<XLinkParams>(
  'x',
  xLink,
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

export default XShareButton
