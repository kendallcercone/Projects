import { Cormorant_Garamond, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const merriweather = Merriweather({
    variable: "--font-merriweather",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-[#F8F3E8]">
                <Header />
                <div className="flex-1 flex justify-center transition-all duration-500 ease-in-out">
                    <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out">
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
