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

export function getFacebookShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
  appId?: string,
  appSecret?: string,
) {
  const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=engagement&access_token=${appId}|${appSecret}`

  jsonp(endpoint, (err: any, data: any) => {
    callback(
      !err && data && data.engagement ? data.engagement.share_count : undefined,
    )
  })
}

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

export function getRedditShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  const endpoint = `https://www.reddit.com/api/info.json?limit=1&url=${shareUrl}`

  jsonp(endpoint, { param: 'jsonp' }, (err, response) => {
    callback(
      !err &&
        response &&
        response.data &&
        response.data.children.length > 0 &&
        response.data.children[0].data.score
        ? response.data.children[0].data.score
        : undefined,
    )
  })
}

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

export function getVKShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  if (!window.VK) {
    window.VK = {}
  }
  window.VK.Share = {
    count: (index, count) => window.VK.callbacks![index](count),
  }
  window.VK.callbacks = []

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
