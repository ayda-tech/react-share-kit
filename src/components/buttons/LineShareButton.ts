import createShareButton from '../../hocs/createShareButton'
import { lineLink } from '../../utils/button'

const LineShareButton = createShareButton<{ title?: string }>(
  'line',
  lineLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
)

export default LineShareButton
