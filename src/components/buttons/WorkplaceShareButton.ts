import createShareButton from '../../hocs/createShareButton'
import { WorkplaceLinkParams } from '../../types'
import { workplaceLink } from '../../utils/button'

const WorkplaceShareButton = createShareButton<WorkplaceLinkParams>(
  'workplace',
  workplaceLink,
  ({ quote, hashtag }) => ({
    quote,
    hashtag,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
)

export default WorkplaceShareButton
