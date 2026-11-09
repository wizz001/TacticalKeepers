export type Review = {
  id: string
  name: string
  session: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
}

// Add genuine reviews here only after approval and permission to publish.
// Never include email addresses or children's identifying details.
export const reviews: Review[] = []
