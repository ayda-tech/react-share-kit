import createShareButton from '../../hocs/createShareButton'
import { LinkedInLinkParams } from '../../types'
import { linkedinLink } from '../../utils/button'

const LinkedinShareButton = createShareButton<LinkedInLinkParams>(
  'linkedin',
  linkedinLink,
  ({ title, summary, source }) => ({ title, summary, source }),
  {
    windowWidth: 750,
    windowHeight: 600,
  },
)

export default LinkedinShareButton
