import { BAD_REQUEST } from '../configs/configError'
import { BaseError } from './baseError'

export class BadRequestError extends BaseError {
  statusCode = BAD_REQUEST
  constructor(public message: string) {
    super(message)
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
