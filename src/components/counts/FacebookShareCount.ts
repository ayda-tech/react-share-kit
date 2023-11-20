import createShareCount from '../../hocs/createShareCount'
import { getFacebookShareCount } from '../../utils/count'

export default createShareCount(getFacebookShareCount)
