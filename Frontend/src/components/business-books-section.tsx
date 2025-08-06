import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { books, type Book, type DownloadFormData } from "@/data/book-data"
import { useState } from "react"
import { BookCard } from "./book-card"
import { BookDownloadModal } from "./book-preview"

const BooksSection = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDownloadClick = (book: Book) => {
        setSelectedBook(book)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setSelectedBook(null)
    }

    const handleFormSubmit = (data: DownloadFormData) => {
        console.log("Download request:", { book: selectedBook, userData: data })
        handleModalClose()
    }

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto">
                <div className="text-left mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
                        Free Property{" "}
                        <span className="text-primary relative">
                            Resources
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                                viewBox="0 0 100 12"
                                fill="currentColor"
                            >
                                <path d="M0 8c30-4 70-4 100 0v4H0z" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        Download our comprehensive guides and resources to master the Australian property market. Expert insights,
                        proven strategies, and actionable advice—all completely free.
                    </p>
                </div>
                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4 py-4">
                            {books.map((book) => (
                                <CarouselItem key={book.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <BookCard book={book} onDownload={handleDownloadClick} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 bg-white border-border/50 hover:bg-primary hover:text-primary-foreground" />
                        <CarouselNext className="hidden md:flex -right-12 bg-white border-border/50 hover:bg-primary hover:text-primary-foreground" />
                    </Carousel>
                </div>
            </div>
            <BookDownloadModal
                book={selectedBook}
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleFormSubmit}
            />
        </section>
    )
}

export default BooksSection
