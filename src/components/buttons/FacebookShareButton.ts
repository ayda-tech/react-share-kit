import createShareButton from '../../hocs/createShareButton'
import { FacebookLinkParams } from '../../types'
import { facebookLink } from '../../utils/button'

const FacebookShareButton = createShareButton<FacebookLinkParams>(
  'facebook',
  facebookLink,
  (props) => ({
    quote: props.quote,
    hashtag: props.hashtag,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
)

export default FacebookShareButton
