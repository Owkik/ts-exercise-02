import { Readable, pipeline } from 'node:stream'

import winston from 'winston'

import characterGenerator from './lib/characterGenerator.js'
import characterFilter from './lib/characterFilter.js'
import messageFormatter from './lib/messageFormatter.js'

const logger: winston.Logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
  ],
})

pipeline(
  Readable.from(characterGenerator()),
  characterFilter,
  messageFormatter,
  logger,
  (error: Error | null) => {
    if (error) {
      logger.error(error.message)
    }
  },
)
