import { ToolController } from './_ToolController'
import { RectElement } from '@visual'


export class RectToolController extends ToolController {
  constructor(surfaceManager) {
    super()
    this._surfaceManager = surfaceManager
    this._currentElement = null
    this._startX = 0
    this._startY = 0
  }

  handleMouseDown(event) {
    const element = new RectElement(event.x, event.y)
    this._surfaceManager.addElement(element)
    this._currentElement = element
    this._startX = event.x
    this._startY = event.y
  }

  handleMouseMove(event) {
    if (this._currentElement) {
      this._currentElement.width = event.x - this._startX
      this._currentElement.height = event.y - this._startY
      this._surfaceManager.forceUpdate()
    }
  }

  handleMouseUp(event) {
    this._currentElement = null
  }
}
