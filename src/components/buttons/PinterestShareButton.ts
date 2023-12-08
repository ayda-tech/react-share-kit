import createShareButton from '../../hocs/createShareButton'
import { PinterestLinkParams } from '../../types'
import { pinterestLink } from '../../utils/button'

const PinterestShareButton = createShareButton<PinterestLinkParams>(
  'pinterest',
  pinterestLink,
  ({ media, description }) => ({
    media,
    description,
  }),
  {
    windowWidth: 1000,
    windowHeight: 730,
  },
)

export default PinterestShareButton
