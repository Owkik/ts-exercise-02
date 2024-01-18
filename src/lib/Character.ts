type HairColor = 'blond' | 'n/a' | 'none' | 'brown' | 'brown, grey' | 'black' | 'auburn, white' | 'auburn, grey' | 'grey' | 'auburn' | 'white' | 'blonde'
type SkinColor = 'fair' | 'gold' | 'white, blue' | 'white' | 'light' | 'white, red' | 'unknown' | 'green' | 'green-tan, brown' | 'pale' | 'metal' | 'dark' | 'none' | 'brown mottle' | 'brown' | 'grey' | 'mottled green' | 'orange' | 'blue, grey' | 'grey, red' | 'red' | 'blue' | 'grey, blue' | 'yellow' | 'tan' | 'fair, green, yellow' | 'silver, red' | 'green, grey' | 'red, blue, white' | 'brown, white'
type EyeColor = 'blue' | 'yellow' | 'red' | 'brown' | 'blue-gray' | 'black' | 'hazel' | 'orange' | 'pink' | 'unknown' | 'red, blue' | 'gold' | 'green, yellow' | 'white'
type Gender = 'male' | 'female' | 'n/a' | 'hermaphrodite' | 'none'

export default interface Character {
  name: string
	gender: Gender
  height: string
  mass: string
  hair_color: HairColor
  skin_color: SkinColor
  eye_color: EyeColor
  birth_year: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
