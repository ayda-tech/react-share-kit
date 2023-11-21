import createShareButton from '../../hocs/createShareButton'
import { LineLinkParams } from '../../types'
import { lineLink } from '../../utils/button'

const LineShareButton = createShareButton<LineLinkParams>(
  'line',
  lineLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
)

export default LineShareButton
