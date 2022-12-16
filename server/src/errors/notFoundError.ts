import { NOT_FOUND } from '../configs/configError'
import { BaseError } from './baseError'

export class NotFoundError extends BaseError {
  statusCode = NOT_FOUND
  constructor() {
    super('Route not found')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
  serializeErrors() {
    return [{ message: 'Page Not Found' }]
  }
}
