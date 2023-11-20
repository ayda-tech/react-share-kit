import createShareButton from '../../hocs/createShareButton'
import { instapaperLink } from '../../utils/button'

const InstapaperShareButton = createShareButton<{
  title?: string
  description?: string
}>(
  'instapaper',
  instapaperLink,
  (props) => ({
    title: props.title,
    description: props.description,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: 'windowCenter',
  },
)

export default InstapaperShareButton
