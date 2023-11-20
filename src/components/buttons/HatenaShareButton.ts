import createShareButton from '../../hocs/createShareButton'
import { hatenaLink } from '../../utils/button'

const HatenaShareButton = createShareButton<HatenaLinkParams>(
  'hatena',
  hatenaLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
)

export default HatenaShareButton
