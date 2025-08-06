import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Book, DownloadFormData } from "@/data/book-data"
import { Download } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export const BookDownloadModal = ({
    book,
    isOpen,
    onClose,
    onSubmit,
}: {
    book: Book | null
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: DownloadFormData) => void
}) => {
    const [formData, setFormData] = useState<DownloadFormData>({
        name: "",
        email: "",
        phone: "",
        agreeToNewsletter: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData({ name: "", email: "", phone: "", agreeToNewsletter: false })
    }

    const handleInputChange = (field: keyof DownloadFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    if (!book) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Download className="w-5 h-5 text-primary" />
                        </div>
                        Download Resource
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="relative w-10 h-fit flex-shrink-0">
                            <img src={book.img || "/placeholder.svg"} alt={book.title} className="object-cover rounded" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-base text-foreground mb-1 line-clamp-2">{book.title}</h4>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Phone Number *</Label>
                            <Input
                                id="phone"
                                type="text"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                            <Checkbox
                                id="newsletter"
                                checked={formData.agreeToNewsletter}
                                onCheckedChange={(checked) => handleInputChange("agreeToNewsletter", checked as boolean)}
                            />
                            <div className="grid gap-1.5 leading-none">
                                <Label
                                    htmlFor="newsletter"
                                    className="text-sm font-normal cursor-pointer leading-relaxed text-muted-foreground"
                                >
                                    I agree to receive newsletters and updates about property insights, market trends, and exclusive
                                    resources.
                                </Label>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                                Cancel
                            </Button>
                            <Button type="submit" className="flex-1">
                                <Download className="w-4 h-4 mr-2" />
                                Download Now
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
