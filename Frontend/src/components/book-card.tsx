import type { Book } from "@/data/book-data";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export const BookCard = ({ book, onDownload }: { book: Book; onDownload: (book: Book) => void }) => {
    return (
        <Card className="group overflow-hidden rounded-2xl border border-border shadow-none p-0">
            <CardHeader className="p-0 relative h-96 overflow-hidden bg-primary/10">
                <img
                    src={book.img || "/placeholder.svg"}
                    alt={book.title}
                    className="absolute scale-95 inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>

            <CardContent className="px-5 space-y-3 pb-5">
                <h3 className="text-xl font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {book.title}
                </h3>
                <p className="text-base text-muted-foreground line-clamp-2">
                    {book.description}
                </p>
                <Button
                    onClick={() => onDownload(book)}
                    className="w-full"
                    size="sm"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                </Button>
            </CardContent>
        </Card>
    );
};
