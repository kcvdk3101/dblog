// NOTE: chalk@v4.1.2 work with Typescript

import chalk from 'chalk'

export class LogService {
  public success<T>(message: T) {
    console.log(
      chalk.green(`[${new Date().toLocaleString()}] [CONGRA 🏆]`),
      chalk.greenBright(message),
    )
  }

  public info<T>(message: T) {
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO 😎]`),
      chalk.blueBright(message),
    )
  }

  public warning<T>(message: T) {
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [WARNING 🤔]`),
      chalk.yellowBright(message),
    )
  }

  public error<T>(message: T) {
    console.log(
      chalk.red(`[${new Date().toLocaleString()}] [ERROR 😞]`),
      chalk.redBright(message),
    )
  }
}

export const logService = new LogService()
