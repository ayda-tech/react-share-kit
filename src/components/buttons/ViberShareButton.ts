import createShareButton from '../../hocs/createShareButton'
import { ViberLinkParams } from '../../types'
import { viberLink } from '../../utils/button'

const ViberShareButton = createShareButton<ViberLinkParams>(
  'viber',
  viberLink,
  ({ separator, title }) => ({
    title,
    separator: separator || ' ',
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default ViberShareButton
