import { isBrowser } from './isBrowser'

export const getPageName = () => {
  return isBrowser()
    ? window.location.pathname.includes('/uk/') || window.location.pathname.includes('/en/')
      ? window.location.pathname.slice(4)
      : window.location.pathname.slice(1)
    : null
}