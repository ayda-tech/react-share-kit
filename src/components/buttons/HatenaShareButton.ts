import createShareButton from '../../hocs/createShareButton'
import { HatenaLinkParams } from '../../types'
import { hatenaLink } from '../../utils/button'

const HatenaShareButton = createShareButton<HatenaLinkParams>(
  'hatena',
  hatenaLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
)

export default HatenaShareButton
