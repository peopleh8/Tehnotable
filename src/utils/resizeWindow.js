import { isBrowser } from './isBrowser'

let resizeCount = 1

export const resizeWindow = () => {
  if (isBrowser()) {
    resizeCount === 1 && window.dispatchEvent(new Event('resize'))
    resizeCount++
  }
}