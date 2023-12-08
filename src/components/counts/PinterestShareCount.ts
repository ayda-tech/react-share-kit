import createShareCount from '../../hocs/createShareCount'
import { getPinterestShareCount } from '../../utils/count'

export default createShareCount(getPinterestShareCount)
