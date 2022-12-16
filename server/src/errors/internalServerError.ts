import { INTERNAL_SERVER } from '../configs/configError'
import { BaseError } from './baseError'

export class InternalServerError extends BaseError {
  reason = 'Error connection to database'
  statusCode = INTERNAL_SERVER
  constructor() {
    super('Database Error')
    Object.setPrototypeOf(this, InternalServerError.prototype)
  }
  serializeErrors() {
    return [{ message: this.reason }]
  }
}
