import createShareButton from '../../hocs/createShareButton'
import { facebookMessengerLink } from '../../utils/button'

const FacebookMessengerShareButton =
  createShareButton<FacebookMessengerLinkParams>(
    'facebookMessenger',
    facebookMessengerLink,
    (props) => ({
      appId: props.appId,
      redirectUri: props.redirectUri,
      to: props.to,
    }),
    {
      windowWidth: 1000,
      windowHeight: 820,
    },
  )

export default FacebookMessengerShareButton
