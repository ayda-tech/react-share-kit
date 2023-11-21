import createShareButton from '../../hocs/createShareButton'
import { MailruLinkParams } from '../../types'
import { mailruLink } from '../../utils/button'

const MailruShareButton = createShareButton<MailruLinkParams>(
  'mailru',
  mailruLink,
  ({ title, description, imageUrl }) => ({
    title,
    description,
    imageUrl,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default MailruShareButton
