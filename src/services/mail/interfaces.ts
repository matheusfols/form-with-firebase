import { ReactNode } from "react"

export type SendMailProps = {
  to: string[]
  cc?: string[]
  bcc?: string[]
  subject: string
  text?: string
  html?: any
}