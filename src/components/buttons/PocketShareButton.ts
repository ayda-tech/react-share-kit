import createShareButton from '../../hocs/createShareButton'
import { PocketLinkParams } from '../../types'
import { pocketLink } from '../../utils/button'

const PocketShareButton = createShareButton<PocketLinkParams>(
  'pocket',
  pocketLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
)

export default PocketShareButton
