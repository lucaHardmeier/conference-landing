export interface ConferenceProps {
  name: string
  description: string
  date: string
  themesLists: [
    {
      img: string
      alt: string
      ticketColor: string
    }
  ]
}
