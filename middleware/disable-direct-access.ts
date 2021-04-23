import { Middleware } from '@nuxt/types'

const disableDirectAccess: Middleware = ({ ssrContext, redirect }) => {
  if (ssrContext) redirect('/')
}

export default disableDirectAccess
