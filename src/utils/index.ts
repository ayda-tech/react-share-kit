/**
 * Checks if the user's device is a mobile or tablet device.
 *
 * @returns A boolean indicating whether the device is a mobile or tablet device.
 */
export function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}

/**
 * Opens a custom window or dialog with specified dimensions and configuration options.
 *
 * @param url - The URL to open in the window or dialog.
 * @param options - The options for configuring the window or dialog.
 * @param blankTarget - Specifies whether to open the URL in a new blank tab or window.
 * @param onClose - The callback function to be called when the window or dialog is closed.
 * @returns The opened window or dialog.
 */
export function CustomWindow(
  url: string,
  {
    height,
    width,
    ...configRest
  }: { height: number; width: number; [key: string]: any },
  blankTarget?: boolean,
  onClose?: (dialog: Window | null) => void,
) {
  const config: { [key: string]: string | number } = {
    height,
    width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  }

  let dialog: Window

  if (blankTarget) {
    dialog = <Window>window.open(url, '_blank')
  } else {
    dialog = <Window>window.open(
      url,
      '',
      Object.keys(config)
        .map((key) => `${key}=${config[key]}`)
        .join(', '),
    )
  }

  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (dialog === null || dialog.closed) {
          window.clearInterval(interval)
          onClose(dialog)
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e)
        /* eslint-enable no-console */
      }
    }, 1000)
  }

  return dialog
}

/**
 * Calculates the position (left and top) of a window or dialog to center it on the user's screen.
 *
 * @param width - The width of the window or dialog.
 * @param height - The height of the window or dialog.
 * @returns An object containing the left and top positions to center the window or dialog.
 */
export const getPositionOnWindowCenter = (width: number, height: number) => ({
  left:
    window.outerWidth / 2 +
    (window.screenX || window.screenLeft || 0) -
    width / 2,
  top:
    window.outerHeight / 2 +
    (window.screenY || window.screenTop || 0) -
    height / 2,
})

/**
 * Calculates the position (left and top) of an element on the screen to center it horizontally and vertically.
 *
 * @param width - The width of the element.
 * @param height - The height of the element.
 * @returns An object containing the left and top positions to center the element on the screen.
 */
export const getPositionOnScreenCenter = (width: number, height: number) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2,
})

/**
 * Checks if an object is a Promise.
 *
 * @param obj - The object to check.
 * @returns A boolean indicating whether the object is a Promise.
 */
export const isPromise = (obj: any | Promise<any>) =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function'

/**
 * Transforms an object into a query string format with URL parameters.
 *
 * @param object - The object to transform into parameters.
 * @returns The query string with URL parameters.
 */
export default function transformObjectToParams(object: {
  [key: string]: string | number | undefined | null
}) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )

  return params.length > 0 ? `?${params.join('&')}` : ''
}
