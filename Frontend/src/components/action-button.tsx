import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const ActionButton = ({ title }: { title: string }) => {
    return (
        <Button
            size="lg"
            className="bg-[#D8B588] hover:bg-[#D8B588]/90 text-white px-8 py-6 text-lg font-semibold group"
        >
            {title}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
    )
}

export default ActionButton