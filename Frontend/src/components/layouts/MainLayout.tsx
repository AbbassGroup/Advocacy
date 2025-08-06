import Lenis from 'lenis'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Navbar from '../common/navbar'
function easeOutQuint(x: number): number {
    return 1 - Math.pow(1 - x, 5)
}
const MainLayout = () => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
            easing: easeOutQuint,
        })

        return () => {
            lenis.destroy()
        }
    }, [])
    return (
        <div className='space-y-12'>
            <div className='container mx-auto px-4 md:px-12 space-y-16'>
                <div>
                    <Navbar />
                </div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout