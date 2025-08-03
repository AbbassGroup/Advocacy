import { Outlet } from 'react-router-dom'
import Navbar from '../common/navbar'

const MainLayout = () => {
    return (
        <div className='space-y-12 container mx-auto'>
            <div>
                <Navbar />
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout