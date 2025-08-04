import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/pages/homepage/_components/hero-section";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HeroSection />
            }
        ]
    }
])