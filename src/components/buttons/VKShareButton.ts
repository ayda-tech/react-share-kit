import createShareButton from '../../hocs/createShareButton'
import { vkLink } from '../../utils/button'

const VKShareButton = createShareButton<VKShareLinkParams>(
  'vk',
  vkLink,
  ({ title, image, noParse, noVkLinks }) => ({
    title,
    image,
    noParse,
    noVkLinks,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default VKShareButton
