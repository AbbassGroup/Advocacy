import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Navbar from '../common/navbar'
import ScrollToTop from '@/utils/scroll-top'
import lenis from '@/utils/lenis'

const MainLayout = () => {
    useEffect(() => {
        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])
    return (
        <div>
            <ScrollToTop />
            <div className='space-y-12'>
                <div className='container mx-auto px-4 md:px-12 space-y-16'>
                    <Navbar />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
