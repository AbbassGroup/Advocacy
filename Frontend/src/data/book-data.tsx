export type Book = {
  title: string;
  description: string;
  img: string;
};
export interface DownloadFormData {
    name: string
    email: string
    phone: string
    agreeToNewsletter: boolean
}

export const books: Book[] = [
  {
    "title": "Benefits for purchasing an investment property first",
    "description": "Start building wealth through rental income early",
    "img": "images/book-1.png"
  },
  {
    "title": "Reasons for financing your portfolio",
    "description": "Leverage financing to grow investments faster",
    "img": "images/book-2.png"
  },
  {
    "title": "Unlocking Your Property Investment Potential",
    "description": "Maximize returns with smart property strategies",
    "img": "images/book-3.png"
  },
  {
    "title": "Why investing is essential",
    "description": "Secure your future through smart investing",
    "img": "images/book-4.png"
  }
]