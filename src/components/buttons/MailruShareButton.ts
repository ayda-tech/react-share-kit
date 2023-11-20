import createShareButton from '../../hocs/createShareButton'
import { mailruLink } from '../../utils/button'

const MailruShareButton = createShareButton<{
  title?: string
  description?: string
  imageUrl?: string
}>(
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
