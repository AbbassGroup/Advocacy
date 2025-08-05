import MainLayout from "@/components/layouts/MainLayout";
import Homepage from "@/pages/homepage/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            }
        ]
    }
])