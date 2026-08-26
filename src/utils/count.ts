import jsonp from 'jsonp'
import objectToGetParams from '.'

declare global {
  interface Window {
    OK: {
      Share: {
        count: (index: number, _count: number) => void
      }
      callbacks: ((count?: number) => void)[]
    }
    ODKL: {
      updateCount: (index: string, count: string) => void
    }
  }
  interface Window {
    VK: {
      Share?: {
        count: (index: number, count: number) => void
      }
      callbacks?: ((count?: number) => void)[]
    }
  }
}

/**
 * Retrieves the share count of a URL on Hatena Bookmark.
 *
 * @param shareUrl - The URL to retrieve the share count for.
 * @param callback - The callback function to be called with the share count.
 */
export function getHatenaShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  const url = 'https://bookmark.hatenaapis.com/count/entry'

  jsonp(
    url +
      objectToGetParams({
        url: shareUrl,
      }),
    (err, data) => {
      callback(!err ? data : undefined)
    },
  )
}

/**
 * Retrieves the share count of a URL on OK.ru (Odnoklassniki).
 *
 * @param shareUrl - The URL to retrieve the share count for.
 * @param callback - The callback function to be called with the share count.
 */
export function getOKShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          window.OK.callbacks[index](_count)
        },
      },
      callbacks: [],
    }
  }

  const url = 'https://connect.ok.ru/dk'
  const index = window.OK.callbacks.length

  window.ODKL = {
    updateCount(index, count) {
      const callbackIndex =
        index === '' ? 0 : parseInt(index.replace('react-share-', ''), 10)
      window.OK.callbacks[callbackIndex](
        count === '' ? undefined : parseInt(count, 10),
      )
    },
  }
  window.OK.callbacks.push(callback)

  return jsonp(
    url +
      objectToGetParams({
        'st.cmd': 'extLike',
        uid: `react-share-${index}`,
        ref: shareUrl,
      }),
  )
}

/**
 * Retrieves the share count of a URL on Pinterest.
 *
 * Note: this relies on the legacy (unofficial) v1 count endpoint, which still
 * responds as of 2026 but may disappear without notice.
 *
 * @param shareUrl - The URL to retrieve the share count for.
 * @param callback - The callback function to be called with the share count.
 */
export function getPinterestShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  const url = 'https://api.pinterest.com/v1/urls/count.json'

  jsonp(
    url +
      objectToGetParams({
        url: shareUrl,
      }),
    (err, data) => {
      callback(!err && data ? data.count : undefined)
    },
  )
}

/**
 * Retrieves the share count of a URL on Tumblr.
 *
 * @param shareUrl - The URL to retrieve the share count for.
 * @param callback - The callback function to be called with the share count.
 */
export function getTumblrShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  const endpoint = 'https://api.tumblr.com/v2/share/stats'

  return jsonp(
    endpoint +
      objectToGetParams({
        url: shareUrl,
      }),
    (err, data) => {
      callback(
        !err && data && data.response ? data.response.note_count : undefined,
      )
    },
  )
}

/**
 * Retrieves the share count of a URL on VK.com (VKontakte).
 *
 * @param shareUrl - The URL to retrieve the share count for.
 * @param callback - The callback function to be called with the share count.
 */
export function getVKShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  if (!window.VK) {
    window.VK = {}
  }
  if (!window.VK.Share) {
    window.VK.Share = {
      count: (index, count) => window.VK.callbacks![index](count),
    }
  }
  if (!window.VK.callbacks) {
    window.VK.callbacks = []
  }

  const url = 'https://vk.com/share.php'
  const index = window.VK.callbacks.length

  window.VK.callbacks.push(callback)

  return jsonp(
    url +
      objectToGetParams({
        act: 'count',
        index,
        url: shareUrl,
      }),
  )
}
