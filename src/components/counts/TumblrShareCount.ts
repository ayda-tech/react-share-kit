import createShareCount from '../../hocs/createShareCount'
import { getTumblrShareCount } from '../../utils/count'

export default createShareCount(getTumblrShareCount)
