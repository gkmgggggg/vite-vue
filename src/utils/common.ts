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
