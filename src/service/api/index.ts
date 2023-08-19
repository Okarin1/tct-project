import { xlRequest } from '..'

export function getWebInfo() {
  return xlRequest.request({ url: '/site' })
}
