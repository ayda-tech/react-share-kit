import createShareButton from '../../hocs/createShareButton'
import { FacebookMessengerLinkParams } from '../../types'
import { facebookMessengerLink } from '../../utils/button'

const FacebookMessengerShareButton =
  createShareButton<FacebookMessengerLinkParams>(
    'facebookmessenger',
    facebookMessengerLink,
    ({ appId, redirectUri, to }) => ({
      appId,
      redirectUri,
      to,
    }),
    {
      windowWidth: 1000,
      windowHeight: 820,
    },
  )

export default FacebookMessengerShareButton
