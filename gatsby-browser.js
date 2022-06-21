import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { enableScrollbar } from './src/utils/enableScrollbar'

NProgress.configure({ showSpinner: false })

export const onPreRouteUpdate = ({ prevLocation }) => {
  prevLocation && NProgress.start()
  enableScrollbar()
}

export const onRouteUpdate = () => {
  NProgress.done()
}