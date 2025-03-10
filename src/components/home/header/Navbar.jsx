import { UpperNavbar } from "./UpperNavbar";
import { LowerNavbar } from "./LowerNavbar";
import '../../../styles/navbar.css'

export function Navbar() {
    return (
        <header className="flex flex-col items-center w-full">
            <UpperNavbar />
            <LowerNavbar />
        </header>
    );
}