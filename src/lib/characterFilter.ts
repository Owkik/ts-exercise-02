import { Transform, TransformCallback } from 'node:stream'

import Character from './Character.js'

export default new Transform({
  objectMode: true,
  transform(data: Character, encoding: string, next: TransformCallback) {
    if (data.gender === 'female') {
      next(null, data)
      return
    }
    next()
  },
})
