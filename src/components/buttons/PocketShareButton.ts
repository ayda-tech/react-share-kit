import createShareButton from '../../hocs/createShareButton'
import { pocketLink } from '../../utils/button'

const PocketShareButton = createShareButton<PocketLinkParams>(
  'pocket',
  pocketLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
)

export default PocketShareButton
