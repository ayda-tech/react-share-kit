import { ReactElement, useEffect, useState } from 'react'
import { SocialMediaShareCountProps } from '../types'

const defaultChildren = (shareCount: number) => shareCount

const SocialMediaShareCount = ({
  children = defaultChildren,
  className,
  getCount,
  url,
  ...rest
}: SocialMediaShareCountProps) => {
  const [count, setCount] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    setIsLoading(true)
    getCount(url, (shareCount) => {
      if (isMounted) {
        setCount(shareCount)
        setIsLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [url, getCount])

  return (
    <span className={className} {...rest}>
      {!isLoading && count !== undefined && children(count)}
    </span>
  )
}

export default function createShareCount(
  getCount: SocialMediaShareCountProps['getCount'],
) {
  const ShareCount = (
    props: Omit<SocialMediaShareCountProps, 'getCount'>,
  ): ReactElement => <SocialMediaShareCount getCount={getCount} {...props} />

  ShareCount.displayName = `ShareCount(${getCount.name})`

  return ShareCount
}
