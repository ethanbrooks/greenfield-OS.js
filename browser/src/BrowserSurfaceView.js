export default class BrowserSurfaceView {
  static create (globalX, globalY, browserSurface) {
    return new BrowserSurfaceView(globalX, globalY, browserSurface)
  }

  /**
   *
   * @param {number} globalX
   * @param {number} globalY
   * @param {BrowserBuffer} browserSurface
   */
  constructor (globalX, globalY, browserSurface) {
    this.position = {x: globalX, y: globalY}
    this.browserSurface = browserSurface
  }

  setPosition (position) {
    this.position = position
  }
}