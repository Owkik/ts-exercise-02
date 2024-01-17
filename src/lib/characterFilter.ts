import { Transform, TransformCallback } from 'node:stream'

import Character from './Character.js'

export default new Transform({
  objectMode: true,
  transform(data: Character, encoding: BufferEncoding, next: TransformCallback): void {
    if (data.gender === 'female') {
      next(null, data)
      return
    }
    next()
  },
})
