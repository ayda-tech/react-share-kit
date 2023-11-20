import createShareButton from '../../hocs/createShareButton'
import { liveJournalLink } from '../../utils/button'

const LiveJournalShareButton = createShareButton<LiveJournalLinkParams>(
  'liveJournal',
  liveJournalLink,
  (props) => ({
    title: props.title,
    description: props.description,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
)

export default LiveJournalShareButton
