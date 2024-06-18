import ButtonUpPage from "./ButtonUpPage";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface MainContentProps {
    children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <ButtonUpPage />
        </>
    );
}
