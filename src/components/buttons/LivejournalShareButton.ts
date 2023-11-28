import createShareButton from '../../hocs/createShareButton'
import { LiveJournalLinkParams } from '../../types'
import { liveJournalLink } from '../../utils/button'

const LiveJournalShareButton = createShareButton<LiveJournalLinkParams>(
  'livejournal',
  liveJournalLink,
  ({ description, title }) => ({
    title,
    description,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default LiveJournalShareButton
