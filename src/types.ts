
export type DesignItem = {
  id: number,
  number: number,
  name: string,
  url: string,
  images: Image[],
  isPublished: boolean,
}

export type NewDesign = Omit<DesignItem, 'id'>


export type Image = {
  path: string,
}