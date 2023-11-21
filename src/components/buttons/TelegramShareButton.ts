import createShareButton from '../../hocs/createShareButton'
import { TelegramLinkParams } from '../../types'
import { telegramLink } from '../../utils/button'

const TelegramShareButton = createShareButton<TelegramLinkParams>(
  'telegram',
  telegramLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
)

export default TelegramShareButton
