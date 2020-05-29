import { theme } from '../../styling/theme'

const colors = Object.values(theme.accents)

const getRandomInt = (max:number) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const color = () => {
  const len = colors.length
  return colors[getRandomInt(len)]
}
