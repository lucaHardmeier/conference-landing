import { ComponentType } from "react"

export interface Sponsor {
  img: string
  alt: string
}
export interface Theme {
  img: string
  alt: string
  ticketColor: string
}

export interface TicketProps {
  name: string
  date?: Date
  sponsorsList: Sponsor[]
  themesList: Theme[]
}

export interface ConferenceProps extends TicketProps {
  description: string
  Login?: ComponentType
  HeroTitle?: ComponentType
}
