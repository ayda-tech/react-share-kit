import React from 'react'
import { IconProps } from '../../types'

import icons from '../../constant/icons'

const Icon: React.FC<IconProps> = ({
  color,
  background,
  round,
  size,
  borderRadius,
  network,
}) => {
  const icon = icons[network.toString()]

  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      {round ? (
        <circle cx="32" cy="32" r="31" fill={background ?? icon?.color} />
      ) : (
        <rect
          width="64"
          height="64"
          rx={borderRadius}
          ry={borderRadius}
          fill={background ?? icon?.color}
        />
      )}
      <path d={icon?.path} fill={color ? color : '#ffffff'} />
    </svg>
  )
}

export default React.memo(Icon)
