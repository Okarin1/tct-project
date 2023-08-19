export class WebSet {
  private title
  private children
  constructor(title: string, children: Web[]) {
    this.title = title
    this.children = children
  }
  getWebNum() {
    return this.children.length
  }

  *[Symbol.iterator]() {
    yield* this.children
  }
}

class Web {
  private text
  private url
  private desc
  private icon
  constructor(text: string, url: string, desc: string | null, icon?: string | null) {
    this.text = text
    this.url = url
    this.desc = desc
    this.icon = icon
  }
}

export interface webObjInterface {
  title: string
  children: webObjChildInterface[]
}
export interface webObjChildInterface {
  text: string
  url: string
  desc: string | null
  icon?: string | null
}

export function getWebSet(webObj: webObjInterface) {
  const webArr = ((opt: Web[]) => {
    for (let i of webObj.children) {
      opt.push(new Web(i.text, i.url, i.desc, i.icon))
    }
    return opt
  })([])
  return new WebSet(webObj.title, webArr)
}
