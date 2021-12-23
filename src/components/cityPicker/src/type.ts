// 城市对象（按城市）
export interface City {
  id: number,
  spell: string,
  name: string
}

// 城市对象（按省份）
export interface Province {
  name: string,
  data: string[]
}