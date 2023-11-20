import createShareButton from '../../hocs/createShareButton'
import { gabLink } from '../../utils/button'

const GabShareButton = createShareButton<{ title?: string }>(
  'gab',
  gabLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: 'windowCenter',
  },
)

export default GabShareButton
