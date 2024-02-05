declare interface Logo {
  blockClass?: string
  title?: string
  width?: string
  heigth?: string
  fillColor?: FillColorLogo
}

type FillColorLogo = {
  general: string
  cta: string
}
