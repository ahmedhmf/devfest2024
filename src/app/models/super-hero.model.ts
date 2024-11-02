export type SuperHeroModel = {
  "id": number,
  "name": string,
  "slug": string| null,
  powerstats: PowerModel,
  appearance: AppearanceModel,
  biography: BiographyModel
  work: WorkModel
  connections: ConnectionsModel,
  images: ImagesModel
}

export type PowerModel = {
  intelligence: number| null,
  strength: number| null,
  speed: number| null,
  durability: number| null,
  power: number| null,
  combat: number| null,
}

export type AppearanceModel = {
  gender: string| null,
  race: string| null,
  height: string[]| null,
  weight: string[]| null,
  eyeColor: string| null,
  hairColor: string| null
}

export type BiographyModel = {
  fullName: string| null,
  alterEgos: string| null,
  aliases: string[]| null,
  placeOfBirth: string| null,
  firstAppearance: string| null,
  publisher: string| null,
  alignment: string| null
}

export type WorkModel = {
  occupation: string| null,
  base: string| null
}

export type ConnectionsModel = {
  groupAffiliation: string| null;
  relatives: string| null;
}

export type ImagesModel = {
  xs: string,
  sm: string,
  md: string,
  lg: string
}
