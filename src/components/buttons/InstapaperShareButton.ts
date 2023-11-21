import createShareButton from '../../hocs/createShareButton'
import { InstaPaperLinkParams } from '../../types'
import { instapaperLink } from '../../utils/button'

const InstapaperShareButton = createShareButton<InstaPaperLinkParams>(
  'instapaper',
  instapaperLink,
  ({ title, description }) => ({
    title,
    description,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: 'windowCenter',
  },
)

export default InstapaperShareButton
