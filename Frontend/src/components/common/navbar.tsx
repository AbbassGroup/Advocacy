import { Button } from "@/components/ui/button";
import { NavMenu } from "../nav-menu";
import { NavigationSheet } from "../navigation-sheet";

const Navbar = () => {
    return (
        <div className="h-16 w-full">
            <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 container mx-auto rounded-lg">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <img src="/logo.png" alt="abbas advocacy logo" className="h-12"/>

                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />

                    <div className="flex items-center gap-3">
                        <Button className="rounded-lg">Get Appointment</Button>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
