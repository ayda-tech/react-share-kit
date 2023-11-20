import createShareButton from '../../hocs/createShareButton'
import { facebookLink } from '../../utils/button'

const FacebookShareButton = createShareButton<{
  quote?: string
  hashtag?: string
}>(
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
