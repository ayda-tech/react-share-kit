import createShareButton from '../../hocs/createShareButton'
import { ThreadsLinkParams } from '../../types'
import { threadsLink } from '../../utils/button'

const ThreadsShareButton = createShareButton<ThreadsLinkParams>(
  'threads',
  threadsLink,
  ({ title }) => ({
    title,
  }),
  {
    windowWidth: 550,
    windowHeight: 600,
  },
)

export default ThreadsShareButton
