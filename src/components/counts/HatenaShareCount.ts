import createShareCount from '../../hocs/createShareCount'
import { getHatenaShareCount } from '../../utils/count'

export default createShareCount(getHatenaShareCount)
