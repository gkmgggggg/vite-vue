export function sleep (duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

export function getBrowser () {
  const userAgent = navigator.userAgent
  const isOpera = userAgent.indexOf('opera') !== -1
  const isEdge = userAgent.indexOf('Edge') !== -1
  const isIE = (userAgent.indexOf('compatible') !== -1 && userAgent.indexOf('MSIE') !== -1 && !isOpera) ||
    (userAgent.indexOf('Trident') !== -1 && userAgent.indexOf('rv:11.0') !== -1)
  const isFF = userAgent.indexOf('Firefox') !== -1
  const isSafari = userAgent.indexOf('Safari') !== -1 &&
    userAgent.indexOf('Chrome') === -1
  const isChrome = userAgent.indexOf('Chrome') !== -1 &&
    userAgent.indexOf('Safari') !== -1
  return {
    isOpera,
    isEdge,
    isIE,
    isFF,
    isSafari,
    isChrome
  }
}

export function deepClone (source: any) {
  if (!source || typeof source !== 'object') {
    throw new Error('出错了')
  }
  const targetObj: any = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object') {
      targetObj[key] = deepClone(source[key])
    } else {
      targetObj[key] = source[key]
    }
  })
  return targetObj
}

export function uniqueArray (arr: any) {
  return Array.from(new Set(arr))
}

export function toogleClass (element: HTMLElement, classname: string) {
  let classString: string = element.className
  const index = classString.indexOf(classname)
  if (index === -1) {
    classString += classname
  } else {
    classString = classString.substr(0, index) + classString.substr(index, classString.length)
  }
  element.className = classString
}
