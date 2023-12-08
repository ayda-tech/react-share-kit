import createShareButton from '../../hocs/createShareButton'
import { WeiboShareLinkParams } from '../../types'
import { weiboLink } from '../../utils/button'

const WeiboShareButton = createShareButton<WeiboShareLinkParams>(
  'weibo',
  weiboLink,
  (props) => ({
    title: props.title,
    image: props.image,
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: 'screenCenter',
  },
)

export default WeiboShareButton
