import createShareButton from '../../hocs/createShareButton'
import { WhatsAppLinkParams } from '../../types'
import { whatsappLink } from '../../utils/button'

const WhatsappShareButton = createShareButton<WhatsAppLinkParams>(
  'whatsapp',
  whatsappLink,
  ({ title, separator }) => ({
    title,
    separator: separator || ' ',
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
)

export default WhatsappShareButton
