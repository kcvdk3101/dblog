import { NOT_AUTHORIZED } from '../configs/configError'
import { BaseError } from './baseError'

export class NotAuthorizedError extends BaseError {
  statusCode = NOT_AUTHORIZED
  constructor() {
    super('Not authorized')
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }
  serializeErrors() {
    return [{ message: 'Not authorized' }]
  }
}
