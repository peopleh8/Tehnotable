import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export const onPreRouteUpdate = ({ prevLocation }) => {
  prevLocation && NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
}