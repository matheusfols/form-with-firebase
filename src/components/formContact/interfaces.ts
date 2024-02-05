export interface FormContactProps {
  area?: string
  callbackSuccess?: () => void
  callbackError?: () => void
}
export interface Contact {
  name: string
  email: string
  phone: string
  message?: string
  url?: string
  terms: boolean
}

export interface ButtonContactProps {
  text: string
  callBack?: () => void
  area: string
}

export interface SectionContactProps {
  area: string
}