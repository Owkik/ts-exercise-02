import fetch from 'node-fetch'

import Character from './Character.js'

/* eslint-disable */

interface ApiResponse {
  count: number
  previous: string | null
  next: string | null
  results: Character[]
}

export default async function* characterGenerator(): AsyncGenerator {
  let url: string | null = 'https://swapi.dev/api/people/'

  while (url !== null) {
    const page: ApiResponse = await (await fetch(url)).json() as ApiResponse

    for (const character of page.results) {
      yield character
    }

    url = page.next
  }
}
