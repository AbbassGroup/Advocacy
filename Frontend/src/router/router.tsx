import MainLayout from "@/components/layouts/MainLayout";
import ContactPage from "@/pages/contact-us/page";
import Homepage from "@/pages/homepage/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/advocacy/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: 'contact-us',
                element: <ContactPage />
            }
        ]
    }
])