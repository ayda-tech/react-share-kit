import React from 'react'
import { SVGConfig, SVGProps } from '../types'

export default function createIcon(config: SVGConfig) {
  const Icon: React.FC<SVGProps> = ({
    bgStyle = {},
    borderRadius = 0,
    iconFillColor = 'white',
    round,
    size = 64,
    ...rest
  }: SVGProps) => (
    <svg viewBox="0 0 64 64" width={size} height={size} {...rest}>
      {round ? (
        <circle cx="32" cy="32" r="31" fill={config.color} style={bgStyle} />
      ) : (
        <rect
          width="64"
          height="64"
          rx={borderRadius}
          ry={borderRadius}
          fill={config.color}
          style={bgStyle}
        />
      )}

      <path d={config.path} fill={iconFillColor} />
    </svg>
  )

  return Icon
}
