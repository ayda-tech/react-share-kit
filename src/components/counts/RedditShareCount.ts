import createShareCount from '../../hocs/createShareCount'
import { getRedditShareCount } from '../../utils/count'

export default createShareCount(getRedditShareCount)
