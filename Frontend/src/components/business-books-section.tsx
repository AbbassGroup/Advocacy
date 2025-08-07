import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { books, type Book, type DownloadFormData } from "@/data/book-data"
import { useState } from "react"
import { BookCard } from "./book-card"
import { BookDownloadModal } from "./book-preview"
import SectionHeader from "./section-header"

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
                <div className="mb-16">
                    <SectionHeader
                        preText="Free Property"
                        highlightText="Resources"
                        description="Download our comprehensive guides and resources to master the Australian property market. Expert insights,
                        proven strategies, and actionable advice—all completely free."
                    />
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
