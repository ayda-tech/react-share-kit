import createShareButton from '../../hocs/createShareButton'
import { GapLinkParams } from '../../types'
import { gabLink } from '../../utils/button'

const GabShareButton = createShareButton<GapLinkParams>(
  'gab',
  gabLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: 'windowCenter',
  },
)

export default GabShareButton
