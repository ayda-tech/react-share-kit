import createShareButton from '../../hocs/createShareButton'
import { EmailLinkParams } from '../../types'
import { emailLink } from '../../utils/button'

const EmailShareButton = createShareButton<EmailLinkParams>(
  'email',
  emailLink,
  (props) => ({
    subject: props.subject,
    body: props.body,
    separator: props.separator || ' ',
  }),
  {
    openShareDialogOnClick: false,
    onClick: (_, link: string) => {
      window.location.href = link
    },
  },
)

export default EmailShareButton
