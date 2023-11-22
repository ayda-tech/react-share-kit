import React from 'react'
import { SVGConfig, SVGProps } from '../types'

export default function createIcon(config: SVGConfig) {
  const Icon: React.FC<SVGProps> = ({
    style = {},
    borderRadius = 0,
    iconFillColor = 'white',
    round,
    bgColor,
    size = 64,
    ...rest
  }: SVGProps) => (
    <svg viewBox="0 0 64 64" width={size} height={size} {...rest}>
      {round ? (
        <circle
          cx="32"
          cy="32"
          r="31"
          fill={bgColor ?? config.color}
          style={style}
        />
      ) : (
        <rect
          width="64"
          height="64"
          rx={borderRadius}
          ry={borderRadius}
          fill={bgColor ?? config.color}
          style={style}
        />
      )}

      <path d={config.path} fill={iconFillColor} />
    </svg>
  )

  return Icon
}
