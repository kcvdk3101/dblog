import { HttpCode } from '../enum/httpCode'

export interface AppErrorArgs {
  name?: string
  httpCode: HttpCode
  description: string
  isOperational?: boolean
}
